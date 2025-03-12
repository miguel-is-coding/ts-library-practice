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
            this.console.log(this.formatStatementLine(transaction, currentBalance));
        }
    }

    private formatStatementLine(transaction: Transaction, currentBalance: number) {
        const formattedAmount = transaction.amount.toFixed(2);
        const formattedBalance = currentBalance.toFixed(2);
        return `${transaction.date} | ${formattedAmount} | ${formattedBalance}`
    }
}

