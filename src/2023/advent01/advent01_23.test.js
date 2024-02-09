const findFirstRepeated = require('./advent01_23');

describe('Having advent`s challenge number 1', () => {
  test('#Test 01 - First ID repeated', () => {
    const giftIds = [2, 1, 3, 5, 3, 2];

    const answer = 3;
    // Even though 2 and 3 are repeated
    // 3 appears second time first

    expect(findFirstRepeated(giftIds)).toEqual(answer);
  });
  test('#Test 02 - First ID repeated', () => {
    const giftIds = [1, 2, 3, 4];

    const answer = -1;
    // It is -1 since no number is repeated

    expect(findFirstRepeated(giftIds)).toEqual(answer);
  });
  test('#Test 03 - First ID repeated', () => {
    const giftIds = [5, 1, 5, 1];

    const answer = 5;

    expect(findFirstRepeated(giftIds)).toEqual(answer);
  });
});
