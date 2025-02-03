import {sumNumbersFrom} from "../../string_calculator/sumNumbersFrom";

describe(`String calculator`, () => {
    it(`should return zero in case of the list is empty`, () => {
        expect(sumNumbersFrom("")).toBe(0)
    });

    it('should return the number value when there is only one in the list', () => {
        expect(sumNumbersFrom("1")).toBe(1)
    });

    it('should return the sum of number values in the list', () => {
        expect(sumNumbersFrom("1,2")).toBe(3)
    });

    it('should obviate any non numeric value in the list', () => {
        expect(sumNumbersFrom("1,a,2")).toBe(3)
    });

    it('should use a custom separator when used', () => {
        expect(sumNumbersFrom("//#/3#2")).toBe(5)
        expect(sumNumbersFrom('//#/3,2')).toBe(0);
    });
});
