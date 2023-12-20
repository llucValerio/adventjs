const getMaxGifts = require('./advent05_22');

describe('Having advent`s challenge number 5', () => {
  test('maximum gifts can be distributed', () => {
    const giftsCities = [12, 3, 11, 5, 7];
    const maxGifts = 20;
    const maxCities = 3;

    const answer = 20; // (12 + 3 + 5)

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50];
    const maxGifts = 15;
    const maxCities = 1;

    const answer = 0;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50];
    const maxGifts = 100;
    const maxCities = 1;

    const answer = 50;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50, 70];
    const maxGifts = 100;
    const maxCities = 1;

    const answer = 70;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50, 70, 30];
    const maxGifts = 100;
    const maxCities = 2;

    const answer = 100;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50, 70, 30];
    const maxGifts = 100;
    const maxCities = 3;

    const answer = 100;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50, 70, 30];
    const maxGifts = 100;
    const maxCities = 4;

    const answer = 100;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [50, 70, 100, 30];
    const maxGifts = 100;
    const maxCities = 6;

    const answer = 100;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
  test('maximum gifts can be distributed', () => {
    const giftsCities = [10, 20, 30, 40];
    const maxGifts = 90;
    const maxCities = 2;

    const answer = 70;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(answer);
  });
});
