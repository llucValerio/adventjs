const isValid = require('./advent03_21');

describe('Having advent`s challenge number 3', () => {
  test('#Test 01 - letter is valid', () => {
    const letter = 'bici coche (balón) bici coche peluche';

    expect(isValid(letter)).toEqual(true);
  });
  test('#Test 02 - letter is valid', () => {
    const letter = '(muñeca) consola bici';

    expect(isValid(letter)).toEqual(true);
  });
  test('#Test 03 - letter is valid', () => {
    const letter = 'bici coche (balón bici coche';

    expect(isValid(letter)).toEqual(false);
  });
  test('#Test 04 - letter is valid', () => {
    const letter = 'peluche (bici [coche) bici coche balón';

    expect(isValid(letter)).toEqual(false);
  });
  test('#Test 05 - letter is valid', () => {
    const letter = '(peluche {) bici';

    expect(isValid(letter)).toEqual(false);
  });
  test('#Test 06 - letter is valid', () => {
    const letter = '() bici';

    expect(isValid(letter)).toEqual(false);
  });
  test('#Test 07 - letter is valid', () => {
    const letter = 'bici (balón bici coche';

    expect(isValid(letter)).toEqual(false);
  });
});
