const checkIsSameTree = require('./advent24_21');

describe('Having advent`s challenge number 24', () => {
  test('tree and tree should be the same', () => {
    const tree = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    };

    const answer = true;

    expect(checkIsSameTree(tree, tree)).toEqual(answer);
  });
  test('tree and tree2 should not be the same', () => {
    const tree = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    };
    const tree2 = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    };

    const answer = false;

    expect(checkIsSameTree(tree, tree2)).toEqual(answer);
  });
  test('tree2 and tree2 should be the same', () => {
    const tree2 = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    };

    const answer = true;

    expect(checkIsSameTree(tree2, tree2)).toEqual(answer);
  });
});
