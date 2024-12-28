/**
 x "" -> ""
 x "Foo" -> "Foo"
 x "Foo Bar" -> "FooBar"
 x "Foo-Bar_Baz" -> "FooBarBaz"
 x "foo" -> "Foo"
 x "foo bar" -> "FooBar"
 x "foo-bar baz_qux" -> "FooBarBazQux"
 */

import {toCamelCase} from "../../camel_case/toCamelCase";

describe("Camel Case converter should", () => {
    it("allow empty text", () => {
        expect(toCamelCase('')).toBe('')
    })

    it("keep capitalisation in a single word", () => {
        expect(toCamelCase('Foo')).toBe('Foo')
    })

    it("join capitalized words separated by a spaces", () => {
        expect(toCamelCase('Foo Bar')).toBe('FooBar')
    })

    it("join capitalized words separated by hyphens", () => {
        expect(toCamelCase('Foo-Bar_Baz')).toBe('FooBarBaz')
    })

    it("capitalize a lower case word", () => {
        expect(toCamelCase('foo')).toBe('Foo')
    })

    it("capitalize each lower case word from a text", () => {
        expect(toCamelCase('foo-bar baz_qux')).toBe('FooBarBazQux')
    })
})
