const listGifts = require('./advent02_21');

describe('Having advent`s challenge number 2', () => {
  test('#Test 01 - letter is transformed', () => {
    const letter = 'bici coche balón _playstation bici coche peluche';

    const answer = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    };
    expect(listGifts(letter)).toEqual(answer);
  });
});
