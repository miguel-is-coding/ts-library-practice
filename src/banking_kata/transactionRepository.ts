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
        this.transactions.push(new Transaction(this.clock.todayFormatted(), amount))
    }

    addWithdrawal(amount: number) {
    }
}
