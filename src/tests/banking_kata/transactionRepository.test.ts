import {Clock} from "../../banking_kata/clock";
import {TransactionRepository} from "../../banking_kata/transactionRepository";
import {Transaction} from "../../banking_kata/transaction";

describe('Transaction repository', () => {
    const today = '12/03/2024';
    const clock = new Clock();
    clock.todayFormatted = () => today;
    let repository: TransactionRepository;

    beforeEach(() => {
        repository = new TransactionRepository(clock);
    });

    it('stores a deposit transaction for a given amount', () => {
        const amount = 100;

        repository.addDeposit(amount);

        const transactions = repository.allTransactions();
        expect(transactions[0]).toEqual(new Transaction(today, amount))
    });

    it('stores a withdrawal transaction for a given amount', () => {
        const amount = 100;

        repository.addWithdrawal(amount);

        const transactions = repository.allTransactions();
        expect(transactions[0]).toEqual(new Transaction(today, -amount))
    });
});
