function primeFactorsOf(number: number) {
    let factor = 2;
    if (number % factor !== 0) {
        factor = 3
    }
    const factors = [factor];
    const remainder = number / factor;
    if (remainder > 1) {
        return factors.concat(primeFactorsOf(remainder))
    }
    return factors;
}

/**
 * Cases:
 * x 2 -> 2
 * x 4 -> [2,2]
 * 8 -> [2,2,2]
 * 3 -> [3]
 * 9 -> [3,3]
 * 6 -> [2,3]
 * 25 -> [5,5]
 * 1155 -> [3,5,7,11]
 */
describe('Prime factors', () => {
    it('finds the prime composition of the given number', () => {
        expect(primeFactorsOf(2)).toEqual([2]);
        expect(primeFactorsOf(4)).toEqual([2, 2]);
        expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
        expect(primeFactorsOf(3)).toEqual([3]);
    });
});
