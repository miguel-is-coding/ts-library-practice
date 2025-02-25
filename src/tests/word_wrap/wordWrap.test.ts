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
        return text
    }
    const wrappedText = text.substring(0, columnWidth) + '\n';
    const unwrappedText = text.substring(columnWidth);
    return wrappedText + unwrappedText
}

describe('Word wrap', () => {
    it('makes every single line of text fit the column width', () => {
        expect(wordWrap('', 5)).toBe('')
        expect(wordWrap('hello', 5)).toBe('hello')
        expect(wordWrap('longword', 4)).toBe('long\nword')
        expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd')
    });
});
