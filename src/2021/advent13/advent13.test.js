const wrapGifts = require('./advent13');

describe('Having advent`s challenge number 13', () => {
  test('how to wrap these presents', () => {
    const presents = ['📷', '⚽️'];

    const answer = [
      '****',
      '*📷*',
      '*⚽️*',
      '****'
    ];

    expect(wrapGifts(presents)).toEqual(answer);
  });
  test('how to wrap these presents', () => {
    const presents = ['🏈🎸', '🎮🧸'];

    const answer = ['******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******'
    ];

    expect(wrapGifts(presents)).toEqual(answer);
  });
  test('how to wrap these presents', () => {
    const presents = ['📷'];

    const answer = ['****',
      '*📷*',
      '****'
    ];

    expect(wrapGifts(presents)).toEqual(answer);
  });
});
