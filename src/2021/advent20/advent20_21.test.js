const pangram = require('./advent20_21');

describe('Having advent`s challenge number 20', () => {
  test('is a pangram', () => {
    const text = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho';

    const answer = true;

    expect(pangram(text)).toEqual(answer);
  });
  test('is a pangram', () => {
    const text = 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!';

    const answer = true;

    expect(pangram(text)).toEqual(answer);
  });
  test('is a pangram', () => {
    const text = 'Esto es una frase larga pero no tiene todas las letras del abecedario';

    const answer = false;

    expect(pangram(text)).toEqual(answer);
  });
  test('is a pangram', () => {
    const text = 'De la a a la z, nos faltan letras';

    const answer = false;

    expect(pangram(text)).toEqual(answer);
  });
});
