import {Account} from "../../banking_kata/account";
import {TransactionRepository} from "../../banking_kata/transactionRepository";

describe('The account', () => {
    const repository = new TransactionRepository();
    const account = new Account(repository);

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
});
