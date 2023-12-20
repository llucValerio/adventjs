const dryNumber = require('./advent18_22');

describe('Having advent`s challenge number 18', () => {
  test('barcodes can not be printed', () => {
    const missingInk = 1;
    const barcodesToPrint = 15;

    // we don't have ink for the number 1
    // we have to print 15 barcodes from 1 to 15
    // the barcodes that will be wrong because of the lack of ink are:
    const answer = [1, 10, 11, 12, 13, 14, 15];

    expect(dryNumber(missingInk, barcodesToPrint)).toEqual(answer);
  });
  test('barcodes can not be printed', () => {
    const missingInk = 2;
    const barcodesToPrint = 20;

    // we don't have ink for the number 2
    // we have to print 20 barcodes from 1 to 20
    // the barcodes that will be wrong because of the lack of ink are:
    const answer = [2, 12, 20];

    expect(dryNumber(missingInk, barcodesToPrint)).toEqual(answer);
  });
});
