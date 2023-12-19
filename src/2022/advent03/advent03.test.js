const distributeGifts = require('./advent03');

describe('Having advent`s challenge number 3', () => {
  test('how many gifts can be delivered', () => {
    const packOfGifts = ['book', 'doll', 'ball'];
    const reindeers = ['dasher', 'dancer'];

    const answer = 2;
    // pack weights 4 + 4 + 4 = 12
    // reindeers can carry (2 * 6) + (2 * 6) = 24

    expect(distributeGifts(packOfGifts, reindeers)).toEqual(answer);
  });
  test('how many gifts can be delivered', () => {
    const packOfGifts = ['book'];
    const reindeers = ['dasher', 'dancer'];

    const answer = 6;

    expect(distributeGifts(packOfGifts, reindeers)).toEqual(answer);
  });
  test('how many gifts can be delivered', () => {
    const packOfGifts = ['book', 'AgiftwithAveryLongName    '];
    const reindeers = ['dasher', 'dancer'];

    const answer = 0;

    expect(distributeGifts(packOfGifts, reindeers)).toEqual(answer);
  });
  test('how many gifts can be delivered', () => {
    const packOfGifts = ['book', 'AgiftwithAveryLongName    withSpaces    '];
    const reindeers = ['dasher', 'dancer'];

    const answer = 0;

    expect(distributeGifts(packOfGifts, reindeers)).toEqual(answer);
  });
});
