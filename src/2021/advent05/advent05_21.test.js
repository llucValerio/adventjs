const daysToXmas = require('./advent05_21');

describe('Having advent`s challenge number 5', () => {
  test('#Test 01 - 1/12/21 it`s 24 for christmas', () => {
    const date = new Date('Dec 1, 2021');

    const answer = 24;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 02 - 24/12/21 it`s 1 for christmas', () => {
    const date = new Date('Dec 24, 2021 00:00:01');

    const answer = 1;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 03 - 24/12/21 it`s 1 for christmas', () => {
    const date = new Date('Dec 24, 2021 23:59:59');

    const answer = 1;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 04 - 20/12/21 it`s 5 for christmas', () => {
    const date = new Date('December 20, 2021 03:24:00');

    const answer = 5;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 05 - 25/12/21 it`s 0 for christmas', () => {
    const date = new Date('Dec 25, 2021');

    const answer = 0;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 06 - 26/12/21 it`s -1 for christmas', () => {
    const date = new Date('Dec 26, 2021');

    const answer = -1;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 07 - 31/12/21 it`s -6 for christmas', () => {
    const date = new Date('Dec 31, 2021');

    const answer = -6;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 08 - 1/01/22 it`s -7 for christmas', () => {
    const date = new Date('Jan 1, 2022 00:00:01');

    const answer = -7;

    expect(daysToXmas(date)).toEqual(answer);
  });
  test('#Test 09 - 1/01/22 it`s -7 for christmas', () => {
    const date = new Date('Jan 1, 2022 23:59:59');

    const answer = -7;

    expect(daysToXmas(date)).toEqual(answer);
  });
});
