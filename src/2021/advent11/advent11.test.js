const shouldBuyFidelity = require('./advent11');

describe('Having advent`s challenge number 11', () => {
  test('is worthy to buy fidelity for 1 time', () => {
    const timesToCinema = 1;

    const answer = false; // false -> Mejor comprar tickets de un sólo uso

    expect(shouldBuyFidelity(timesToCinema)).toEqual(answer);
  });
  test('is worthy to buy fidelity for 100 times', () => {
    const timesToCinema = 100;

    const answer = true; // true -> Mejor comprar tarjeta fidelidad

    expect(shouldBuyFidelity(timesToCinema)).toEqual(answer);
  });
});
