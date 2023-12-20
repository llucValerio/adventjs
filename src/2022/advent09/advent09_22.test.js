const countTime = require('./advent09_22');

describe('Having advent`s challenge number 9', () => {
  test('how many seconds to change the leds', () => {
    const leds = [0, 1, 1, 0, 1];

    const answer = 7;
    // 7 seconds because in the first change
    // all the lights turned on
    // 0s: [0, 1, 1, 0, 1]
    // 7s: [1, 1, 1, 1, 1]

    expect(countTime(leds)).toEqual(answer);
  });
  test('how many seconds to change the leds', () => {
    const leds = [0, 0, 0, 1];

    const answer = 21;
    // 21 seconds because it needs three changes:
    // 0s: [0, 0, 0, 1]
    // 7s: [1, 0, 0, 1]
    // 14s: [1, 1, 0, 1]
    // 21s: [1, 1, 1, 1]

    expect(countTime(leds)).toEqual(answer);
  });
  test('how many seconds to change the leds', () => {
    const leds = [0, 0, 1, 0, 0];

    const answer = 28;
    // 28 seconds because it needs four changes:
    // 0s: [0, 0, 1, 0, 0]
    // 7s: [0, 0, 1, 1, 0]
    // 14s: [0, 0, 1, 1, 1]
    // 21s: [1, 0, 1, 1, 1]
    // 28s: [1, 1, 1, 1, 1]

    expect(countTime(leds)).toEqual(answer);
  });
});
