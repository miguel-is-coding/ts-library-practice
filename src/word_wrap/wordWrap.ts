import {ColumnWidth} from "./columnWidth";
import {WrappableText} from "./WrappableText";

export function wordWrap(text: string, columnWidth: number) {
    return WrappableText.create(text).wordWrap(ColumnWidth.create(columnWidth))
}
