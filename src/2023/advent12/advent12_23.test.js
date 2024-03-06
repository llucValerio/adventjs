const checkIsValidCopy = require('./advent12_23');

describe('Having advent`s challenge number 12', () => {
  test('#Test 01 - It is a copy of the original', () => {
    const original = 'Santa Claus is coming';
    const copy = 'sa#ta Cl#us i+ comin#';

    const answer = true;

    expect(checkIsValidCopy(original, copy)).toEqual(answer);
  });
  test('#Test 02 - It is not a copy of the original', () => {
    const original = 's#nta Cla#s is coming';
    const copy = 'p#nt: cla#s #s c+min#';

    const answer = false; // (due to the initial p)

    expect(checkIsValidCopy(original, copy)).toEqual(answer);
  });
  test('#Test 03 - It is a copy of the original', () => {
    const original = 'Santa Claus';
    const copy = 's#+:. c:. s';

    const answer = true;

    expect(checkIsValidCopy(original, copy)).toEqual(answer);
  });
  test('#Test 04 - It is not a copy of the original', () => {
    const original = 'Santa Claus';
    const copy = 's#+:.#c:. s';

    const answer = false; // (there is a # where it shouldn't be)

    expect(checkIsValidCopy(original, copy)).toEqual(answer);
  });
  test('#Test 05 - It is a copy of the original', () => {
    const original = '3 #egalos';
    const copy = '3 .+:# #:';

    const answer = true;

    expect(checkIsValidCopy(original, copy)).toEqual(answer);
  });
  test('#Test 06 - It is a copy of the original', () => {
    const original = 'Santa Claus';
    const copy = '###:. c:+##';

    const answer = true;

    expect(checkIsValidCopy(original, copy)).toEqual(answer);
  });
});
