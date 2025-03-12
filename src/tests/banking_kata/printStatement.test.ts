import {Console} from "../../banking_kata/console";
import {Account} from "../../banking_kata/account";
import {TransactionRepository} from "../../banking_kata/transactionRepository";
import {StatementPrinter} from "../../banking_kata/statementPrinter";
import {Clock} from "../../banking_kata/clock";

describe('Print statement', () => {
    const console = new Console();
    const consoleSpy = jest.spyOn(console, 'log');
    const repository = new TransactionRepository(new Clock());
    const statementPrinter = new StatementPrinter();
    const account = new Account(repository, statementPrinter);

    it('prints an account statement with its transactions', () => {
        account.deposit(1000);
        account.withdraw(500);
        account.deposit(2000);
        account.printStatement()

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('05/03/2025 | 2000 | 2500');
        expect(consoleSpy).toHaveBeenCalledWith('10/02/2025 | -500 | 500');
        expect(consoleSpy).toHaveBeenCalledWith('06/02/2025 | 1000 | 1000');
    });
});
