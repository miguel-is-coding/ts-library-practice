/**
 * x 1 -> "1"
 * x 3 -> "fizz"
 * x 5 -> "buzz"
 * x 15 -> "fizzbuzz"
 * x number % 3 -> "fizz"
 * x number % 5 -> "buzz"
 * x number % 15 -> "fizzbuzz"
 * x number !% 3 | 5 | 15 -> "number"
 */

import {fizzBuzz} from "../../fizz_buzz/fizzBuzz";

describe('FizzBuzz should', () => {
    it('transform number one as a text', () => {
        expect(fizzBuzz(1)).toBe('1')
    })

    it('transform number two as a text', () => {
        expect(fizzBuzz(2)).toBe('2')
    })

    it('transform number three as fizz', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    })

    it('transform any number divisible by three as fizz', () => {
        expect(fizzBuzz(6)).toBe('fizz')

    })

    it('transform number five as buzz', () => {
        expect(fizzBuzz(5)).toBe('buzz')
    })

    it('transform any number divisible by five as buzz', () => {
        expect(fizzBuzz(10)).toBe('buzz')
    })

    it('transform number fifteen as fizzbuzz', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })

    it('transform any number divisible by fifteen as fizzbuzz', () => {
        expect(fizzBuzz(30)).toBe('fizzbuzz')
    })

    it('transform any number not divisible by fifteen, five or three as a text', () => {
        expect(fizzBuzz(19)).toBe('19')
    })
})
