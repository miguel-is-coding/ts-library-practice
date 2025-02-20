function findSmallestPrime(number: number) {
    let factor = 2;
    while (number % factor !== 0) {
        ++factor;
    }
    return factor;
}

export function primeFactorsOf(number: number) {
    let prime = findSmallestPrime(number);
    const remainder = number / prime;
    return remainder <= 1 ? [prime] : [prime].concat(primeFactorsOf(remainder));
}
