/**
 * Word wrap: Develop the algorithm to add break lines when the text doesn't fit in the window.
 * This function uses the text and the number of characters that fit in a column (column columnWidth).
 *
 * Later, you will have to add preference with spaces over the column columnWidth
 *
 * Possible cases:
 * - ('', 5) -> ''
 * - ('hello', 5) -> 'hello'
 * - ('longword', 4 -> 'long\nword'
 * - ('reallylongword', 4) -> 'real\nlylo\nngwo\nrd'
 * - ('abc def', 4) -> 'abc\ndef'
 * - ('abc def ghi', 4) -> 'abc\ndef\nghi'
 * - (' abcdf', 4) -> '\nabcd\nf'
 * - (null, 5) -> ''
 * - ('hello', -5) -> throw exception
 */

function wordWrap(text: string, columnWidth: number) {
    if (text.length <= columnWidth) {
        return text;
    }
    const wrapIndex = getWrapIndex(text, columnWidth);
    const unwrapIndex = getUnwrapIndex(text, columnWidth);
    const wrappedText = text.substring(0, wrapIndex) + '\n';
    const unwrappedText = text.substring(unwrapIndex);
    return wrappedText.concat(wordWrap(unwrappedText, columnWidth));
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

describe('Word wrap', () => {
    it('makes every single line of text fit the column width', () => {
        expect(wordWrap('', 5)).toBe('');
        expect(wordWrap('hello', 5)).toBe('hello');
        expect(wordWrap('longword', 4)).toBe('long\nword');
        expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd');
        expect(wordWrap('abc def', 4)).toBe('abc\ndef');
        expect(wordWrap('abc def ghi', 4)).toBe('abc\ndef\nghi');
        expect(wordWrap(' abcd', 4)).toBe('\nabcd');
    });
});
