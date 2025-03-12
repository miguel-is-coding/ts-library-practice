import {Transaction} from "./transaction";
import {Console} from "./console";

export class StatementPrinter {
    private readonly header = 'Date | Amount | Balance';

    constructor(private console: Console) {
    }

    print(transactions: Transaction[]) {
        this.console.log(this.header);
        if (transactions.length > 0) {
            const transaction = transactions[0];
            let currentBalance = 0;
            currentBalance += transaction.amount;
            const formattedAmount = transaction.amount.toFixed(2);
            const formattedBalance = currentBalance.toFixed(2);
            this.console.log(`${transaction.date} | ${formattedAmount} | ${formattedBalance}`)
        }
    }
}

