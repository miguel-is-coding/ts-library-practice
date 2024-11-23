import * as statsAsync from "./statsAsync";
import {expect, test} from "./testLib";

test("calculates the sum of all elements of the array", async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
})

test("calculates the average of all elements of the array", async () => {
    const result = await statsAsync.average([1,2,3]);
    const expected = 2;

    expect(expected).toBe(result);
})
