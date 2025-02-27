import {wordWrap} from "../../word_wrap/wordWrap";

describe('Word wrap', () => {
    it('makes an empty text when there is no text', () => {
        expect(wordWrap(null, 4)).toBe('');
        expect(wordWrap(undefined, 4)).toBe('');
    });

    it('does not wrap text when the text fits the column width', () => {
        expect(wordWrap('', 5)).toBe('');
        expect(wordWrap('hello', 5)).toBe('hello');
    });

    it('add break lines when the text does not fit the column width', () => {
        expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd');
    });

    it('break lines are preferred to be added in spaces', () => {
        expect(wordWrap('abc def', 4)).toBe('abc\ndef');
        expect(wordWrap('abc def ghi', 4)).toBe('abc\ndef\nghi');
        expect(wordWrap(' abcd', 4)).toBe('\nabcd');
    });

    it('cannot have a negative column width', () => {
        expect(() => wordWrap('hello', -5)).toThrow('Column width cannot be negative');
    });
});
