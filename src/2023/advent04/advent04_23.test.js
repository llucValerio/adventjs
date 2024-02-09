const decode = require('./advent04_23');

describe('Having advent`s challenge number 4', () => {
  test('#Test 01 - Format correctly the string', () => {
    const text = 'hola (odnum)';

    const answer = 'hola mundo';

    expect(decode(text)).toEqual(answer);
  });
  test('#Test 02 - Format correctly the string', () => {
    const text = '(olleh) (dlrow)!';

    const answer = 'hello world!';

    expect(decode(text)).toEqual(answer);
  });
  test('#Test 03 - Format correctly the string', () => {
    const text = 'sa(u(cla)atn)s';

    const answer = 'santaclaus';
    // Step by step:
    // 1. Reverse the nested -> sa(ualcatn)s
    // 2. Reverse the remaining one -> santaclaus

    expect(decode(text)).toEqual(answer);
  });
  test('#Test 04 - Format correctly the string', () => {
    const text = '((nta)(sa))';

    const answer = 'santa';

    expect(decode(text)).toEqual(answer);
  });
});
