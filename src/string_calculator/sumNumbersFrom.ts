const nothingToAdd = 0;

export function sumNumbersFrom(expression: string): number {
    if (!expression) {
        return nothingToAdd;
    }
    let separator = ',';
    const beginningOfConfig = '//';
    if (expression.startsWith(beginningOfConfig)) {
        const endOfConfig = '/';
        separator = getSeparatorFrom(expression, beginningOfConfig, endOfConfig);
        expression = removeConfigFrom(expression, endOfConfig);
    }
    const numbersSeparated = expression.split(separator);
    return numbersSeparated
        .map(getNumber)
        .reduce(sum);
}

function getSeparatorFrom(numbers: string, beginningOfConfig: string, endOfConfig: string) {
    return numbers.slice(beginningOfConfig.length, numbers.lastIndexOf(endOfConfig));
}

function removeConfigFrom(numbers: string, endOfConfig: string) {
    return numbers.slice(numbers.lastIndexOf(endOfConfig) + 1);
}

function getNumber(token: string) {
    const parsedToken = Number(token);
    return isNaN(parsedToken) ? nothingToAdd : parsedToken;
}

function sum(accumulator: number, currentValue: number) {
    return accumulator + currentValue;
}

