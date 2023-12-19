const getCoins = require('./advent10');

describe('Having advent`s challenge number 10', () => {
  test('get minimum coins for 51', () => {
    const coins = 51;

    const answer = [1, 0, 0, 0, 0, 1]; // -> una moneda de 1 céntimo y otra de 50 céntimos

    expect(getCoins(coins)).toEqual(answer);
  });
  test('get minimum coins for 3', () => {
    const coins = 3;

    const answer = [1, 1, 0, 0, 0, 0]; // -> una moneda de 1 céntimo y otra de 2

    expect(getCoins(coins)).toEqual(answer);
  });
  test('get minimum coins for 5', () => {
    const coins = 5;

    const answer = [0, 0, 1, 0, 0, 0]; // -> una moneda de 5 céntimos

    expect(getCoins(coins)).toEqual(answer);
  });
  test('get minimum coins for 16', () => {
    const coins = 16;

    const answer = [1, 0, 1, 1, 0, 0]; // -> una moneda de 1 céntimo, una de 5 y una de 10

    expect(getCoins(coins)).toEqual(answer);
  });
  test('get minimum coins for 100', () => {
    const coins = 100;

    const answer = [0, 0, 0, 0, 0, 2]; // -> dos monedas de 50 céntimos

    expect(getCoins(coins)).toEqual(answer);
  });
});
