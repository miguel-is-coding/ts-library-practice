import {primeFactorsOf} from "../../prime_factors/primeFactors";

describe('Prime factors', () => {
    it('finds the prime composition of the given number', () => {
        expect(primeFactorsOf(2)).toEqual([2]);
        expect(primeFactorsOf(4)).toEqual([2, 2]);
        expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
        expect(primeFactorsOf(3)).toEqual([3]);
        expect(primeFactorsOf(9)).toEqual([3, 3]);
        expect(primeFactorsOf(6)).toEqual([2, 3]);
        expect(primeFactorsOf(25)).toEqual([5, 5]);
        expect(primeFactorsOf(1155)).toEqual([3, 5, 7, 11]);
    });
});
