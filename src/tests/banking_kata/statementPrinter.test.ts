import {Console} from "../../banking_kata/console";
import {StatementPrinter} from "../../banking_kata/statementPrinter";
import {Transaction} from "../../banking_kata/transaction";

describe('The Statement Printer', () => {
    const console = new Console();
    const consoleSpy = jest.spyOn(console, 'log')

    it('always prints the header', () => {
        const statementPrinter = new StatementPrinter(console);
        statementPrinter.print([]);
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
    });

    it('prints a statement of account including a given transaction', () => {
        const statementPrinter = new StatementPrinter(console);
        const transactions = [new Transaction('12/03/2025', 100)]

        statementPrinter.print(transactions);

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('12/03/2025 | 100.00 | 100.00');
    });

    it('prints a statement of account including multiple transactions', () => {
        const statementPrinter = new StatementPrinter(console);
        const transactions = [
            new Transaction('12/03/2025', 100),
            new Transaction('13/03/2025', 500),
            new Transaction('14/03/2025', -200),
        ]

        statementPrinter.print(transactions);
        
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('14/03/2025 | -200.00 | 400.00');
        expect(consoleSpy).toHaveBeenCalledWith('13/03/2025 | 500.00 | 600.00');
        expect(consoleSpy).toHaveBeenCalledWith('12/03/2025 | 100.00 | 100.00');
    });
});
