const sortToys = require('./advent19_22');

describe('Having advent`s challenge number 19', () => {
  test('sort the toys given', () => {
    const toys = ['ball', 'doll', 'car', 'puzzle'];
    const positions = [2, 3, 1, 0];

    const answer = ['puzzle', 'car', 'ball', 'doll'];

    expect(sortToys(toys, positions)).toEqual(answer);
  });
  test('sort the toys given', () => {
    const toys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
    const positions = [8, 6, 5, 7, 9];

    const answer = ['ps4', 'xbox', 'switch', 'pc', 'nintendo'];

    expect(sortToys(toys, positions)).toEqual(answer);
  });
});
