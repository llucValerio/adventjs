const fixLetter = require('./advent16_22');

describe('Having advent`s challenge number 16', () => {
  test('fix letters', () => {
    const text = ' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ';

    const answer = 'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.';

    expect(fixLetter(text)).toEqual(answer);
  });
  test('fix letters', () => {
    const text = "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?";

    const answer = "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?";

    expect(fixLetter(text)).toEqual(answer);
  });
  test('fix letters', () => {
    const text = ' hello,      how are     ';

    const answer = 'Hello, how are.';

    expect(fixLetter(text)).toEqual(answer);
  });
  test('fix letters', () => {
    const text = " ups,there's no space after marks;    Is it? i do not known: let's test, I mean ,check if works.";

    const answer = "Ups, there's no space after marks; Is it? I do not known: let's test, I mean, check if works.";

    expect(fixLetter(text)).toEqual(answer);
  });
});
