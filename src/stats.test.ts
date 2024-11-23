import * as stats from "./stats"
import {expect, test} from "./testLib";

test("calculates the sum of all elements of the array", () => {
    const result = stats.sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
})

test("calculates the average of all elements of the array", () => {
    const result = stats.average([1,2,3]);
    const expected = 2;

    expect(expected).toBe(result);
})
