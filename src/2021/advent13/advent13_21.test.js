const wrapGifts = require('./advent13_21');

describe('Having advent`s challenge number 13', () => {
  test('#Test 01 - how to wrap these presents', () => {
    const presents = ['📷', '⚽️'];

    const answer = [
      '****',
      '*📷*',
      '*⚽️*',
      '****'
    ];

    expect(wrapGifts(presents)).toEqual(answer);
  });
  test('#Test 02 - how to wrap these presents', () => {
    const presents = ['🏈🎸', '🎮🧸'];

    const answer = ['******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******'
    ];

    expect(wrapGifts(presents)).toEqual(answer);
  });
  test('#Test 03 - how to wrap these presents', () => {
    const presents = ['📷'];

    const answer = ['****',
      '*📷*',
      '****'
    ];

    expect(wrapGifts(presents)).toEqual(answer);
  });
});
