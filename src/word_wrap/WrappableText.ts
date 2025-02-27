import {ColumnWidth} from "./columnWidth";

export class WrappableText {
    private constructor(private readonly text: String) {
    }

    static create(text: String) {
        if (text == null) {
            return new WrappableText('');
        }
        return new WrappableText(text);
    }

    value(): String {
        return this.text;
    }

    fitsIn(columnWidth: ColumnWidth) {
        return this.value().length <= columnWidth.value()
    }

    private wrapIndex(columnWidth: ColumnWidth) {
        return this.canWrapBySpace(columnWidth) ? this.indexOfSpace() : columnWidth.value();
    }

    private canWrapBySpace(columnWidth: ColumnWidth) {
        return this.indexOfSpace() > -1 && this.indexOfSpace() < columnWidth.value();
    }

    private indexOfSpace() {
        return this.value().indexOf(' ');
    }

    private unwrapIndex(columnWidth: ColumnWidth) {
        return this.canWrapBySpace(columnWidth) ? this.indexOfSpace() + 1 : columnWidth.value();
    }

    wrappedText(columnWidth: ColumnWidth) {
        return this.value().substring(0, this.wrapIndex(columnWidth)) + '\n';
    }

    unwrappedText(columnWidth: ColumnWidth) {
        return this.value().substring(this.unwrapIndex(columnWidth));
    }
}
