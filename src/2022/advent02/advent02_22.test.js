const countHours = require('./advent02_22');
const countHoursControlingLeapYear = require('./advent02_22');

describe('Having advent`s challenge number 2', () => {
  test('#Test 01 - how many extra hours with function 1', () => {
    const year = 2022;
    const holidays = ['01/06', '04/01', '12/25']; // format MM/DD
    // 01/06 is January 6, a Friday. Count.
    // 04/01 is April 1, a Saturday. Do not count.
    // 12/25 is December 25, a Monday. Count.

    const answer = 4; // 2 days -> 4 extra hours in the year

    expect(countHours(year, holidays)).toEqual(answer);
  });
  test('#Test 02 - how many extra hours with function 2', () => {
    const year = 2022;
    const holidays = ['01/06', '04/01', '12/25']; // format MM/DD
    // 01/06 is January 6, a Friday. Count.
    // 04/01 is April 1, a Saturday. Do not count.
    // 12/25 is December 25, a Monday. Count.

    const answer = 4; // 2 days -> 4 extra hours in the year

    expect(countHoursControlingLeapYear(year, holidays)).toEqual(answer);
  });
  test('#Test 03 - how many extra hours with function 1', () => {
    const year = 2021;
    const holidays = ['02/29', '03/01', '03/01']; // format MM/DD

    const answer = 2;

    expect(countHours(year, holidays)).toEqual(answer);
  });
  test('#Test 04 - how many extra hours with function 2', () => {
    const year = 2021;
    const holidays = ['02/29', '03/01', '03/01']; // format MM/DD

    const answer = 2;

    expect(countHoursControlingLeapYear(year, holidays)).toEqual(answer);
  });
});
