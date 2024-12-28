export function toCamelCase(text: string) {
    let separator = /[ _-]/;
    const wordsCapitalized = text.split(separator)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return wordsCapitalized.join('')
}
