import {fibonacci} from "../../fibonacci/fibonacci";

describe('Fibonacci should', () => {
    it('yields zero when the value is zero', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('yields one to number one', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('be the addition of the preceding two values for a number', () => {
        [2, 3, 4, 5].forEach((number) =>
            expect(fibonacci(number)).toBe(fibonacci(number - 1) + fibonacci(number - 2)))
    });
});
