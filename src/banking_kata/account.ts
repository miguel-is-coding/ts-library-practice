import {TransactionRepository} from "./transactionRepository";
import {StatementPrinter} from "./statementPrinter";

export class Account {
    constructor(private repository: TransactionRepository, private statementPrinter: StatementPrinter) {
    }

    deposit(amount: number) {
        this.repository.addDeposit(amount);
    }

    withdraw(amount: number) {
        this.repository.addWithdrawal(amount);
    }

    printStatement(): void {
        this.statementPrinter.print(this.repository.allTransactions())
    }
}
