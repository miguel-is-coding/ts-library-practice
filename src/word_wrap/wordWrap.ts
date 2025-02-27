import {ColumnWidth} from "./columnWidth";

function wordWrapOld(text: string, columnWidth: number) {
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

function getWrapIndex(text: string, columnWidth: number) {
    const spaceCharIndex = text.indexOf(' ');
    const canWrapBySpace = spaceCharIndex > -1 && spaceCharIndex < columnWidth;
    return canWrapBySpace ? spaceCharIndex : columnWidth;
}

function getUnwrapIndex(text: string, columnWidth: number) {
    const spaceCharIndex = text.indexOf(' ');
    const canWrapBySpace = spaceCharIndex > -1 && spaceCharIndex < columnWidth;
    return canWrapBySpace ? spaceCharIndex + 1 : columnWidth;
}

export function wordWrap(text: string, columnWidth: number) {
    return wordWrapNoPrimitives(text, ColumnWidth.create(columnWidth))
}

function wordWrapNoPrimitives(text: string, columnWidth: ColumnWidth) {
    if (text == null) {
        return '';
    }
    if (text.length <= columnWidth.value()) {
        return text;
    }
    const wrapIndex = getWrapIndex(text, columnWidth.value());
    const unwrapIndex = getUnwrapIndex(text, columnWidth.value());
    const wrappedText = text.substring(0, wrapIndex) + '\n';
    const unwrappedText = text.substring(unwrapIndex);
    return wrappedText.concat(wordWrapOld(unwrappedText, columnWidth.value()));
}
