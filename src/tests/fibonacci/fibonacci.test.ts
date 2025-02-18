import {fibonacci} from "../../fibonacci/fibonacci";

describe('Fibonacci should', () => {
    it('yields zero when the value is zero', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('yields one to number one', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('be the addition of the preceding two values for a number', () => {
        expect(fibonacci(2)).toBe(fibonacci(0) + fibonacci(1));
        expect(fibonacci(3)).toBe(fibonacci(1) + fibonacci(2));
    });
});
