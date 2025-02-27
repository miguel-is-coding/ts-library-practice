import {WrappableText} from "../../word_wrap/WrappableText";
import {ColumnWidth} from "../../word_wrap/columnWidth";

describe('Word wrap', () => {
    it('makes an empty text when there is no text', () => {
        expect(WrappableText.create(null).wordWrap(ColumnWidth.create(4))).toEqual({text: ''});
        expect(WrappableText.create(undefined).wordWrap(ColumnWidth.create(4))).toEqual({text: ''});
    });

    it('does not wrap text when the text fits the column width', () => {
        expect(WrappableText.create('').wordWrap(ColumnWidth.create(5))).toEqual({text: ''});
        expect(WrappableText.create('hello').wordWrap(ColumnWidth.create(5))).toEqual({text: 'hello'});
    });

    it('add break lines when the text does not fit the column width', () => {
        expect(WrappableText.create('reallylongword').wordWrap(ColumnWidth.create(4))).toEqual({text: 'real\nlylo\nngwo\nrd'});
    });

    it('break lines are preferred to be added in spaces', () => {
        expect(WrappableText.create('abc def').wordWrap(ColumnWidth.create(4))).toEqual({text: 'abc\ndef'});
        expect(WrappableText.create('abc def ghi').wordWrap(ColumnWidth.create(4))).toEqual({text: 'abc\ndef\nghi'});
        expect(WrappableText.create(' abcd').wordWrap(ColumnWidth.create(4))).toEqual({text: '\nabcd'});
    });

    it('cannot have a negative column width', () => {
        expect(() => WrappableText.create('hello').wordWrap(ColumnWidth.create(-5)).value()).toThrow('Column width cannot be negative');
    });
});
