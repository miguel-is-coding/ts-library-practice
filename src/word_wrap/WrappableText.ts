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

    wrapIndex(columnWidth: ColumnWidth) {
        const spaceCharIndex = this.value().indexOf(' ');
        const canWrapBySpace = spaceCharIndex > -1 && spaceCharIndex < columnWidth.value();
        return canWrapBySpace ? spaceCharIndex : columnWidth.value();
    }
}
