/**
 * Word wrap: Develop the algorithm to add break lines when the text doesn't fit in the window.
 * This function uses the text and the number of characters that fit in a column (column width).
 *
 * Later, you will have to add preference with spaces over the column width
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

function wordWrap(text: string, width: number) {
    return text
}

describe('Word wrap', () => {
    it('makes every single line of text fit the column width', () => {
        expect(wordWrap('', 5)).toBe('')
        expect(wordWrap('hello', 5)).toBe('hello')
    });
});
