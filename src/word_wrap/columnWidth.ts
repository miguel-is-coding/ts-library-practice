export class ColumnWidth {
    private constructor(private readonly width: number) {
    }

    static create(width: number): ColumnWidth {
        if (width < 0) {
            throw new Error('Column width cannot be negative');
        }
        return new ColumnWidth(width);
    }

    value() {
        return this.width;
    }
}
