import {Console} from "../../banking_kata/console";
import {Account} from "../../banking_kata/account";
import {TransactionRepository} from "../../banking_kata/transactionRepository";
import {StatementPrinter} from "../../banking_kata/statementPrinter";
import {Clock} from "../../banking_kata/clock";

describe('Print statement', () => {
    const console = new Console();
    const consoleSpy = jest.spyOn(console, 'log');
    const clock = new Clock();
    const repository = new TransactionRepository(clock);
    const statementPrinter = new StatementPrinter(console);
    const account = new Account(repository, statementPrinter);

    clock.todayFormatted = jest
        .fn()
        .mockReturnValueOnce('06/02/2025')
        .mockReturnValueOnce('10/02/2025')
        .mockReturnValueOnce('05/03/2025')

    it('prints an account statement with its transactions', () => {
        account.deposit(1000);
        account.withdraw(500);
        account.deposit(2000);
        account.printStatement()

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('05/03/2025 | 2000.00 | 2500.00');
        expect(consoleSpy).toHaveBeenCalledWith('10/02/2025 | -500.00 | 500.00');
        expect(consoleSpy).toHaveBeenCalledWith('06/02/2025 | 1000.00 | 1000.00');
    });
});
