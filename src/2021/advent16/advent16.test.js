const decodeNumbers = require('./advent16');

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100

describe('Having advent`s challenge number 15', () => {
  test('decode a number 3', () => {
    const route = ('...');

    const answer = 3;

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 4', () => {
    const route = ('.,');

    const answer = 4; // (5 - 1)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 6', () => {
    const route = (',.');

    const answer = 6; // (5 + 1)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 8', () => {
    const route = (',...');

    const answer = 8; // (5 + 3)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 107', () => {
    const route = ('.........!');

    const answer = 107; // (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 49', () => {
    const route = ('.;');

    const answer = 49; // (50 - 1)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 5', () => {
    const route = ('..,');

    const answer = 5; // (-1 + 1 + 5)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 95', () => {
    const route = ('..,!');

    const answer = 95; // (1 - 1 - 5 + 100)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 49', () => {
    const route = ('.;!');

    const answer = 49; // (-1 -50 + 100)

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 300', () => {
    const route = ('!!!');

    const answer = 300;

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number 50', () => {
    const route = (';!');

    const answer = 50;

    expect(decodeNumbers(route)).toEqual(answer);
  });
  test('decode a number NaN', () => {
    const route = (';.W');

    const answer = Number.NaN;

    expect(decodeNumbers(route)).toEqual(answer);
  });
});
