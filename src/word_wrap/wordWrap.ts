import {ColumnWidth} from "./columnWidth";
import {WrappableText} from "./WrappableText";

function wordWrapOld(text: String, columnWidth: number) {
    if (columnWidth < 0) {
        throw new Error('Column width cannot be negative')
    }
    if (text == null) {
        return '';
    }
    if (text.length <= columnWidth) {
        return text;
    }
    const wrapIndex = getWrapIndex(text, columnWidth);
    const unwrapIndex = getUnwrapIndex(text, columnWidth);
    const wrappedText = text.substring(0, wrapIndex) + '\n';
    const unwrappedText = text.substring(unwrapIndex);
    return wrappedText.concat(wordWrapOld(unwrappedText, columnWidth));
}

function getWrapIndex(text: String, columnWidth: number) {
    const spaceCharIndex = text.indexOf(' ');
    const canWrapBySpace = spaceCharIndex > -1 && spaceCharIndex < columnWidth;
    return canWrapBySpace ? spaceCharIndex : columnWidth;
}

function getUnwrapIndex(text: String, columnWidth: number) {
    const spaceCharIndex = text.indexOf(' ');
    const canWrapBySpace = spaceCharIndex > -1 && spaceCharIndex < columnWidth;
    return canWrapBySpace ? spaceCharIndex + 1 : columnWidth;
}

export function wordWrap(text: string, columnWidth: number) {
    return wordWrapNoPrimitives(WrappableText.create(text), ColumnWidth.create(columnWidth))
}

function wordWrapNoPrimitives(text: WrappableText, columnWidth: ColumnWidth): String {
    if (text.fitsIn(columnWidth)) {
        return text.value();
    }
    const wrapIndex = text.wrapIndex(columnWidth);
    const unwrapIndex = getUnwrapIndex(text.value(), columnWidth.value());
    const wrappedText = text.value().substring(0, wrapIndex) + '\n';
    const unwrappedText = text.value().substring(unwrapIndex);
    return wrappedText.concat(wordWrapOld(unwrappedText, columnWidth.value()));
}
