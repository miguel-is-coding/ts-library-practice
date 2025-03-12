import {Clock} from "../../banking_kata/clock";

describe('The clock', () => {
    it('gets the current date in dd/mm/yyyy format', () => {
        const clock = new Clock();

        expect(clock.todayFormatted()).toEqual('12/03/2025')
    });
});
