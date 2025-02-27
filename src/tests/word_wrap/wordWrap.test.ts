import {wordWrap} from "../../word_wrap/wordWrap";

describe('Word wrap', () => {
    it('makes an empty text when there is no text', () => {
        expect(wordWrap(null, 4)).toEqual({text: ''});
        expect(wordWrap(undefined, 4)).toEqual({text: ''});
    });

    it('does not wrap text when the text fits the column width', () => {
        expect(wordWrap('', 5)).toEqual({text: ''});
        expect(wordWrap('hello', 5)).toEqual({text: 'hello'});
    });

    it('add break lines when the text does not fit the column width', () => {
        expect(wordWrap('reallylongword', 4)).toEqual({text: 'real\nlylo\nngwo\nrd'});
    });

    it('break lines are preferred to be added in spaces', () => {
        expect(wordWrap('abc def', 4)).toEqual({text: 'abc\ndef'});
        expect(wordWrap('abc def ghi', 4)).toEqual({text: 'abc\ndef\nghi'});
        expect(wordWrap(' abcd', 4)).toEqual({text: '\nabcd'});
    });

    it('cannot have a negative column width', () => {
        expect(() => wordWrap('hello', -5).value()).toThrow('Column width cannot be negative');
    });
});
