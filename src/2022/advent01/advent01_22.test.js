const wrapping = require('./advent01_22');

describe('Having advent`s challenge number 1', () => {
  test('sheeps with red and n&a on the name', () => {
    const gifts = ['cat', 'game', 'socks'];

    const answer = [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ];

    expect(wrapping(gifts)).toEqual(answer);
  });
  test('sheeps with red and n&a on the name', () => {
    const gifts = ['book', 'game', 'socks'];

    const answer = [
      '******\n*book*\n******',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ];

    expect(wrapping(gifts)).toEqual(answer);
  });
});
