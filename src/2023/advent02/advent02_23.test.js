const manufacture = require('./advent02_23');

describe('Having advent`s challenge number 2', () => {
  test('#Test 01 - Which gifts can be done', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';

    const answer = ['tren', 'oso'];

    expect(manufacture(gifts, materials)).toEqual(answer);
  });
  test('#Test 02 - Which gifts can be done', () => {
    const gifts = ['juego', 'puzzle'];
    const materials = 'jlepuz';

    const answer = ['puzzle'];

    expect(manufacture(gifts, materials)).toEqual(answer);
  });
  test('#Test 03 - Which gifts can be done', () => {
    const gifts = ['libro', 'ps5'];
    const materials = 'psli';

    const answer = [];

    expect(manufacture(gifts, materials)).toEqual(answer);
  });
});
