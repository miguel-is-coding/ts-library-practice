import {ColumnWidth} from "./columnWidth";

export class WrappableText {
    private constructor(private readonly text: string) {
    }

    static create(text: string) {
        if (text == null) {
            return new WrappableText('');
        }
        return new WrappableText(text);
    }

    wordWrap(columnWidth: ColumnWidth) {
        if (this.fitsIn(columnWidth)) {
            return WrappableText.create(this.value());
        }
        const wrappedText = this.wrappedText(columnWidth);
        const unwrappedText = this.unwrappedText(columnWidth);
        return wrappedText.concat(unwrappedText.wordWrap(columnWidth));
    }

    private fitsIn(columnWidth: ColumnWidth) {
        return this.value().length <= columnWidth.value()
    }

    private concat(text: WrappableText) {
        return WrappableText.create(this.value().concat(text.value()));
    }

    private wrappedText(columnWidth: ColumnWidth) {
        return WrappableText.create(this.value().substring(0, this.wrapIndex(columnWidth)) + '\n');
    }

    private wrapIndex(columnWidth: ColumnWidth) {
        return this.canWrapBySpace(columnWidth) ? this.indexOfSpace() : columnWidth.value();
    }

    private unwrappedText(columnWidth: ColumnWidth) {
        return WrappableText.create(this.value().substring(this.unwrapIndex(columnWidth)));
    }

    private unwrapIndex(columnWidth: ColumnWidth) {
        return this.canWrapBySpace(columnWidth) ? this.indexOfSpace() + 1 : columnWidth.value();
    }

    private canWrapBySpace(columnWidth: ColumnWidth) {
        return this.indexOfSpace() > -1 && this.indexOfSpace() < columnWidth.value();
    }

    private indexOfSpace() {
        return this.value().indexOf(' ');
    }

    value() {
        return this.text;
    }
}
