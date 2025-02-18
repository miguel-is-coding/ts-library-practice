function fibonacci(number: number) {
    if (number === 0) return 0
    return 1;
}

describe('Fibonacci should', () => {
    it('yields zero when the value is zero', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('yields one to number one', () => {
        expect(fibonacci(1)).toBe(1);
    });
});
