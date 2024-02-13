const maxDistance = require('./advent06_23');

describe('Having advent`s challenge number 6', () => {
  test('#Test 01 - Max amount of distance with a specific movements', () => {
    const movements = '>>*<';

    const answer = 2;

    expect(maxDistance(movements)).toEqual(answer);
  });
  test('#Test 02 - Max amount of distance with a specific movements', () => {
    const movements = '<<<>';

    const answer = 2;

    expect(maxDistance(movements)).toEqual(answer);
  });
  test('#Test 03 - Max amount of distance with a specific movements', () => {
    const movements = '>***>';

    const answer = 5;

    expect(maxDistance(movements)).toEqual(answer);
  });
});
