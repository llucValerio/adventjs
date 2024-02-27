const createChristmasTree = require('./advent10_23');

describe('Having advent`s challenge number 9', () => {
  test('#Test 01 - Build a xmas tree with of height of 4', () => {
    const ornaments = '123';
    const height = 4;

    const answer = '   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(answer);
  });
  test('#Test 02 - Build a xmas tree with of height of 3', () => {
    const ornaments = '*@o';
    const height = 3;

    const answer = '  *\n @ o\n* @ o\n  |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(answer);
  });
});
