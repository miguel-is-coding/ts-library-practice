import {Transaction} from "./transaction";
import {Console} from "./console";

export class StatementPrinter {
    private readonly header = 'Date | Amount | Balance';

    constructor(private console: Console) {
    }

    print(transactions: Transaction[]) {
        this.console.log(this.header);
    }
}

