const shouldBuyFidelity = require('./advent11_21');

describe('Having advent`s challenge number 11', () => {
  test('#Test 01 - is worthy to buy fidelity for 1 time', () => {
    const timesToCinema = 1;

    const answer = false; // false -> Mejor comprar tickets de un sólo uso

    expect(shouldBuyFidelity(timesToCinema)).toEqual(answer);
  });
  test('#Test 02 - is worthy to buy fidelity for 100 times', () => {
    const timesToCinema = 100;

    const answer = true; // true -> Mejor comprar tarjeta fidelidad

    expect(shouldBuyFidelity(timesToCinema)).toEqual(answer);
  });
});
