import {Account} from "../../banking_kata/account";
import {TransactionRepository} from "../../banking_kata/transactionRepository";

describe('The account', () => {
    const account = new Account();
    const repository = new TransactionRepository();

    it('stores a deposit transaction', () => {
        const addDepositSpy = jest.spyOn(repository, 'addDeposit');

        account.deposit(100);

        expect(addDepositSpy).toHaveBeenCalledWith(100);
    });
});
