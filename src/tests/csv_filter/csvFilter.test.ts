import {CsvFilter} from "../../csv_filter/csvFilter";

describe('CSV Filter should', () => {
    const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const emptyField = ''

    it('output an empty list for an empty list', () => {
        const csvFilter = CsvFilter.create([]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toStrictEqual([])
    });

    it('allows the same csv when it has a valid line', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({});
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header, invoiceLine])
    });

    it('allows the invoice line when the igic tax is applied', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({ivaTax: '', igicTax: '7', netAmount: '930'});
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header, invoiceLine])
    });

    it('allows only multiple correct lines', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({invoiceId: '1'});
        const invoiceLine2 = fileWithOneInvoiceLineHaving({invoiceId: '2'});
        const csvFilter = CsvFilter.create([header, invoiceLine, invoiceLine2]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header, invoiceLine, invoiceLine2])
    });

    it('does not allow a list with no headers', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({});
        const result = () => CsvFilter.create([invoiceLine]);

        expect(result).toThrow()
    });

    it('exclude the invoice line when igic and iva values are set', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({ivaTax: '21', igicTax: '7'});
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude the invoice line when igic nor iva values are not set', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({ivaTax: '', igicTax: ''});
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude the invoice line when tax values are not decimal', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({ivaTax: 'ABC', igicTax: ''});
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude the invoice line when one tax value is correct and other is not decimal', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({ivaTax: '21', igicTax: 'ABC'});
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude the invoice line when net amount is miscalculated', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({
            ivaTax: '21', igicTax: '', netAmount: '900',
        });
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude the invoice line when net amount is miscalculated for igic tax', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({
            ivaTax: '21', igicTax: '', netAmount: '900',
        });
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude the invoice line when both cif and nif fields are filled', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({
            nif: 'b76730373',
        });
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header])
    });

    it('exclude lines with the same invoice id', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving({invoiceId: '1'});
        const repeatedInvoiceLine = fileWithOneInvoiceLineHaving({invoiceId: '1'});
        const invoiceLine2 = fileWithOneInvoiceLineHaving({invoiceId: '2'});
        const invoiceLine3 = fileWithOneInvoiceLineHaving({invoiceId: '3'});

        const csvFilter = CsvFilter.create([header, invoiceLine, repeatedInvoiceLine, invoiceLine2, invoiceLine3]);

        const filteredLines = csvFilter.filteredLines;

        expect(filteredLines).toEqual([header, invoiceLine2, invoiceLine3])
    });

    function fileWithOneInvoiceLineHaving({
                                              invoiceId = '1',
                                              ivaTax = '21',
                                              igicTax = emptyField,
                                              netAmount = '790',
                                              nif = emptyField
                                          }: FileWithOneInvoiceLineHavingParams) {
        const invoiceDate = '02/05/2021';
        const grossAmount = '1000';
        const concept = 'ACER Laptop';
        const cif = 'B76430134';
        return [invoiceId, invoiceDate, grossAmount, netAmount, ivaTax, igicTax, concept, cif, nif].join(',');
    }
});

interface FileWithOneInvoiceLineHavingParams {
    invoiceId?: String,
    ivaTax?: string;
    igicTax?: string;
    netAmount?: string;
    nif?: string;
}
