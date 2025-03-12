import {Transaction} from "./transaction";
import {Console} from "./console";

export class StatementPrinter {
    private readonly header = 'Date | Amount | Balance';

    constructor(private console: Console) {
    }

    print(transactions: Transaction[]) {
        this.console.log(this.header);
        let currentBalance = 0;
        transactions
            .map((transaction) => {
                currentBalance += transaction.amount;
                return this.formatStatementLine(transaction, currentBalance);
            })
            .reverse()
            .forEach((line) => this.console.log(line));
    }

    private formatStatementLine(transaction: Transaction, currentBalance: number) {
        const formattedAmount = transaction.amount.toFixed(2);
        const formattedBalance = currentBalance.toFixed(2);
        return `${transaction.date} | ${formattedAmount} | ${formattedBalance}`
    }
}

