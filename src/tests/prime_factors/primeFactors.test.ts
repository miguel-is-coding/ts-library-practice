import {primeFactorsOf} from "../../prime_factors/primeFactors";

describe('Prime factors', () => {
    it('knows what is a prime number', () => {
        expect(primeFactorsOf(2)).toEqual([2]);
        expect(primeFactorsOf(3)).toEqual([3]);
    });

    it('produces the same result to multiply the numbers in the output list', () => {
        expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    });

    it('orders the prime factors from the smallest to the biggest', () => {
        expect(primeFactorsOf(1155)).toEqual([3, 5, 7, 11]);
    });

    it('knows that the first prime is number one', () => {
        expect(primeFactorsOf(1)).toEqual([1]);
    });

    it('only accepts positive numbers', () => {
        expect(() => primeFactorsOf(-1)).toThrow();
    });
});
