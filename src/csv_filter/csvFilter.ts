export class CsvFilter {
    private constructor(private readonly lines: (string)[]) {
    }

    static create(lines: (string)[]) {
        if (lines.length === 1) {
            throw new Error("Single line is not allowed")
        }
        return new CsvFilter(lines);
    }

    get filteredLines() {
        if (this.lines.length === 0) {
            return [];
        }
        const headers = this.lines[0];
        const invoices = this.lines.slice(1);
        const validatedInvoices = this.takeValidInvoicesFrom(invoices);
        return [headers].concat(this.takeRepeatedInvoiceIdsFrom(validatedInvoices));
    }

    private takeValidInvoicesFrom(invoices: string[]) {
        return invoices.filter(this.isValidInvoice);
    }

    private takeRepeatedInvoiceIdsFrom(invoices: string[]) {
        const invoiceIds = invoices.map((invoice) => this.invoiceId(invoice));
        const duplicatedIds = invoiceIds.filter((id, index) => invoiceIds.indexOf(id) !== index);
        return invoices.filter(invoice => !duplicatedIds.includes(this.invoiceId(invoice)));
    }

    private isValidInvoice = (invoice: string) => {
        const fieldValues = invoice.split(',')
        const grossField = fieldValues[2];
        const netField = fieldValues[3];
        const ivaField = fieldValues[4];
        const igicField = fieldValues[5];
        const decimalRegex = /^-?\d*\.?\d+$/;
        const areTaxFieldsAreMutuallyExclusive = (ivaField.match(decimalRegex) || igicField.match(decimalRegex)) && (!ivaField || !igicField);
        const isNetAmountCalculusCorrect = this.isNetAmountCorrect(netField, grossField, ivaField) || this.isNetAmountCorrect(netField, grossField, igicField);
        const areIdentifierFieldsAreMutuallyExclusive = !fieldValues[7] || !fieldValues[8];
        return areTaxFieldsAreMutuallyExclusive && isNetAmountCalculusCorrect && areIdentifierFieldsAreMutuallyExclusive
    }

    private isNetAmountCorrect(netField: string, grossField: string, taxField: string) {
        const netAmount = parseFloat(netField);
        const grossAmount = parseFloat(grossField);
        const taxAmount = parseFloat(taxField);
        return netAmount === grossAmount - (grossAmount * taxAmount / 100);
    }

    private invoiceId(invoice: string) {
        return invoice.split(',')[0];
    }
}
