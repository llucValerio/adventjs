const getOptimalPath = require('./advent14_22');

describe('Having advent`s challenge number 14', () => {
  test('#Test 01 - minimum time for the reeinders', () => {
    const reeinderPath = [[0], [2, 3]];

    const answer = 2;

    expect(getOptimalPath(reeinderPath)).toEqual(answer);
  });
  test('#Test 02 - minimum time for the reeinders', () => {
    const reeinderPath = [[0], [3, 4], [9, 8, 1]];

    const answer = 5;

    expect(getOptimalPath(reeinderPath)).toEqual(answer);
  });
  test('#Test 03 - minimum time for the reeinders', () => {
    const reeinderPath = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]];

    const answer = 8;

    expect(getOptimalPath(reeinderPath)).toEqual(answer);
  });
  test('#Test 04 - minimum time for the reeinders', () => {
    const reeinderPath = [[0], [1, 5], [8, 9, 1]];

    const answer = 6;

    expect(getOptimalPath(reeinderPath)).toEqual(answer);
  });
});
