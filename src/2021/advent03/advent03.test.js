const isValid = require('./advent03');

describe('Having advent`s challenge number 3', () => {
  test('letter is valid', () => {
    const letter = 'bici coche (balón) bici coche peluche';

    expect(isValid(letter)).toEqual(true);
  });
  test('letter is valid', () => {
    const letter = '(muñeca) consola bici';

    expect(isValid(letter)).toEqual(true);
  });
  test('letter is valid', () => {
    const letter = 'bici coche (balón bici coche';

    expect(isValid(letter)).toEqual(false);
  });
  test('letter is valid', () => {
    const letter = 'peluche (bici [coche) bici coche balón';

    expect(isValid(letter)).toEqual(false);
  });
  test('letter is valid', () => {
    const letter = '(peluche {) bici';

    expect(isValid(letter)).toEqual(false);
  });
  test('letter is valid', () => {
    const letter = '() bici';

    expect(isValid(letter)).toEqual(false);
  });
  test('letter is valid', () => {
    const letter = 'bici (balón bici coche';

    expect(isValid(letter)).toEqual(false);
  });
});
