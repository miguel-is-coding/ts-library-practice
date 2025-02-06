export function isPasswordValid(password: string) {
    return hasMinimumLength(password)
        && containsNumber(password)
        && containsUpperCase(password)
        && containsLowerCase(password)
        && containsUnderscore(password);
}

function containsNumber(password: string) {
    return password.search(/\d/) !== -1;
}

function containsLowerCase(password: string) {
    return password.search(/[a-z]/) !== -1;
}

function containsUpperCase(password: string) {
    return password.search(/[A-Z]/) !== -1;
}

function containsUnderscore(password: string) {
    return password.search(/_/) !== -1;
}

function hasMinimumLength(password: string) {
    const minimumLength = 6;
    return password.length >= minimumLength;
}
