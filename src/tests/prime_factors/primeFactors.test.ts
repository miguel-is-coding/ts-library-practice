function primeFactorsOf(number: number) {
    const factors = [2];
    if (number / 2 > 1) factors.push(2)
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
    });
});
