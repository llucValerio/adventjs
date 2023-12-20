const getGiftsToRefill = require('./advent07_22');

describe('Having advent`s challenge number 7', () => {
  test('Which products must be replenished', () => {
    const a1 = ['bike', 'car', 'bike', 'bike'];
    const a2 = ['car', 'bike', 'doll', 'car'];
    const a3 = ['bike', 'pc', 'pc'];

    /* The store a1 has "bike" and "car".
    The store a2 has "car", "bike" and "doll".
    The store a3 has "bike" and "pc".

    The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
    */

    const answer = ['doll', 'pc'];

    expect(getGiftsToRefill(a1, a2, a3)).toEqual(answer);
  });
});
