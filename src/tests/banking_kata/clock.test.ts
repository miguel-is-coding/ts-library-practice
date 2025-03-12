import {Clock} from "../../banking_kata/clock";

describe('The clock', () => {
    it('gets the current date in dd/mm/yyyy format', () => {
        const clock = new FakeClock();

        expect(clock.todayFormatted()).toEqual('12/03/2025')
    });
});

class FakeClock extends Clock {
    protected today(): Date {
        return new Date('2025-03-12');
    }
}
