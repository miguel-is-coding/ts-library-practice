import {Transaction} from "./transaction";
import {Clock} from "./clock";

export class TransactionRepository {
    transactions: Transaction[] = []

    constructor(private clock: Clock) {
    }

    allTransactions() {
        return this.transactions;
    }

    addDeposit(amount: number) {
        const transaction = new Transaction(this.clock.todayFormatted(), amount);
        this.transactions.push(transaction)
    }

    addWithdrawal(amount: number) {
        const transaction = new Transaction(this.clock.todayFormatted(), -amount);
        this.transactions.push(transaction)
    }
}
