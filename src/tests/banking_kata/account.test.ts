import {Account} from "../../banking_kata/account";
import {TransactionRepository} from "../../banking_kata/transactionRepository";
import {StatementPrinter} from "../../banking_kata/statementPrinter";
import {Transaction} from "../../banking_kata/transaction";
import {Clock} from "../../banking_kata/clock";
import {Console} from "../../banking_kata/console";

describe('The account', () => {
    const repository = new TransactionRepository(new Clock());
    const statementPrinter = new StatementPrinter(new Console())
    const account = new Account(repository, statementPrinter);

    it('stores a deposit transaction', () => {
        const addDepositSpy = jest.spyOn(repository, 'addDeposit');

        account.deposit(100);

        expect(addDepositSpy).toHaveBeenCalledWith(100);
    });

    it('stores a withdrawal transaction', () => {
        const addWithdrawalSpy = jest.spyOn(repository, 'addWithdrawal');

        account.withdraw(100);

        expect(addWithdrawalSpy).toHaveBeenCalledWith(100);
    });

    it('prints the statement', () => {
        const printStatementSpy = jest.spyOn(statementPrinter, 'print');
        const transactions = [new Transaction('0/0/0000', 100), new Transaction('0/0/0000', 100)];
        repository.allTransactions = () => transactions;

        account.printStatement();

        expect(printStatementSpy).toHaveBeenCalledWith(transactions);
    });
});
