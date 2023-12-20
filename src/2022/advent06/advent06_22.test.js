const createCube = require('./advent06_22');

describe('Having advent`s challenge number 6', () => {
  test('create a cub of 1 dimension', () => {
    const dimension = 1;

    const answer = '/\\_\\\n\\/_/';

    expect(createCube(dimension)).toEqual(answer);
  });
  test('create a cub of 2 dimension', () => {
    const dimension = 2;

    const answer = ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/';
    expect(createCube(dimension)).toEqual(answer);
  });
  test('create a cub of 3 dimension', () => {
    const dimension = 3;

    const answer = '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/';

    expect(createCube(dimension)).toEqual(answer);
  });
  test('create a cub of 4 dimension', () => {
    const dimension = 4;

    const answer = '   /\\_\\_\\_\\_\\\n  /\\/\\_\\_\\_\\_\\\n /\\/\\/\\_\\_\\_\\_\\\n/\\/\\/\\/\\_\\_\\_\\_\\\n\\/\\/\\/\\/_/_/_/_/\n \\/\\/\\/_/_/_/_/\n  \\/\\/_/_/_/_/\n   \\/_/_/_/_/';

    expect(createCube(dimension)).toEqual(answer);
  });
});
