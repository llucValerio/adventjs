const carryGifts = require('./advent17_22');

describe('Having advent`s challenge number 17', () => {
  test('group gifts in bags', () => {
    const gifts = ['game', 'bike', 'book', 'toy'];
    const maxWeight = 10;

    const answer = ['game bike', 'book toy'];
    // in each bag you can carry 10kg
    // the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
    // the second bag carries 'book' and ' toy' which weigh 4kg and 3kg

    expect(carryGifts(gifts, maxWeight)).toEqual(answer);
  });
  test('group gifts in bags', () => {
    const gifts = ['game', 'bike', 'book', 'toy'];
    const maxWeight = 7;

    const answer = ['game', 'bike', 'book toy'];
    // in each bag you can carry 7kg
    // the first bag can only carry 'game' which weighs 4kg
    // the second bag can only carry 'bike' which weighs 4kg

    expect(carryGifts(gifts, maxWeight)).toEqual(answer);
  });
  test('group gifts in bags', () => {
    const gifts = ['game', 'bike', 'book', 'toy'];
    const maxWeight = 4;

    const answer = ['game', 'bike', 'book', 'toy'];
    // in each bag you can carry 4kg
    // each bag can only carry one gift

    expect(carryGifts(gifts, maxWeight)).toEqual(answer);
  });
  test('group gifts in bags', () => {
    const gifts = ['toy', 'gamme', 'toy', 'bike'];
    const maxWeight = 6;

    const answer = ['toy', 'gamme', 'toy', 'bike'];
    // in each bag you can carry 6kg
    // each bag can only carry one gift
    // note that you can not carry 'toy toy' in a bag
    // because it is not next to each other

    expect(carryGifts(gifts, maxWeight)).toEqual(answer);
  });
  test('group gifts in bags', () => {
    const gifts = ['toy', 'toy', 'toy', 'toy'];
    const maxWeight = 2;

    const answer = [];

    expect(carryGifts(gifts, maxWeight)).toEqual(answer);
  });
});
