import * as stats from "./stats"
import {describe, expect, it} from "./testLib"
import * as statsAsync from "./statsAsync";

describe("Stats should", () => {
    it("calculates the sum of all elements of the array", () => {
        const result = stats.sum([1, 2, 3])
        const expected = 6

        expect(expected).toBe(result)
    })

    it("calculates the average of all elements of the array", () => {
        const result = stats.average([1,2,3])
        const expected = 2

        expect(expected).toBe(result)
    })
})

describe("Stats async should", () => {
    it("calculates the sum of all elements of the array", async () => {
        const result = await statsAsync.sum([1, 2, 3])
        const expected = 6

        expect(expected).toBe(result)
    })

    it("calculates the average of all elements of the array", async () => {
        const result = await statsAsync.average([1,2,3])
        const expected = 2

        expect(expected).toBe(result)
    })
})
