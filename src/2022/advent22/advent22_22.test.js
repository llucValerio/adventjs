const checkStepNumbers = require('./advent22_22');

describe('Having advent`s challenge number 22', () => {
  test('#Test 01 - maximum gifts can be distributed', () => {
    const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'];
    const stepNumbers = [1, 33, 10, 2, 44, 20];

    // tree_1 has steps: [1, 2]
    // tree_2 has steps: [33, 44]
    // house has steps: [10, 20]

    // true: The steps of each system are in strictly increasing order

    expect(checkStepNumbers(systemNames, stepNumbers)).toBeTruthy();
  });
  test('#Test 02 - maximum gifts can be distributed', () => {
    const systemNames = ['tree_1', 'tree_1', 'house'];
    const stepNumbers = [2, 1, 10];

    // tree_1 has steps: [2, 1]
    // house has steps: [10]

    // false: tree_1 has steps in decreasing order

    expect(checkStepNumbers(systemNames, stepNumbers)).toBeFalsy();
  });
});
