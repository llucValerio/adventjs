const findNaughtyStep = require('./advent03_23');

describe('Having advent`s challenge number 3', () => {
  test('#Test 01 - Find difference on strings', () => {
    const original = 'abcd';
    const modified = 'abcde';

    const answer = 'e';

    expect(findNaughtyStep(original, modified)).toEqual(answer);
  });
  test('#Test 02 - Find difference on strings', () => {
    const original = 'stepfor';
    const modified = 'stepor';

    const answer = 'f';

    expect(findNaughtyStep(original, modified)).toEqual(answer);
  });
  test('#Test 03 - Find difference on strings', () => {
    const original = 'abcde';
    const modified = 'abcde';

    const answer = '';

    expect(findNaughtyStep(original, modified)).toEqual(answer);
  });
});
