const decorateTree = require('./advent15_22');

describe('Having advent`s challenge number 15', () => {
  test('#Test 01 - create the tree', () => {
    const decorations = 'B P R P';

    const answer = ['R', 'P B', 'R B B', 'B P R P'];

    expect(decorateTree(decorations)).toEqual(answer);
  });
  test('#Test 02 - create the tree', () => {
    const decorations = 'B B';

    const answer = ['B', 'B B'];

    expect(decorateTree(decorations)).toEqual(answer);
  });
  test('#Test 03 - create the tree', () => {
    const decorations = 'B B P R P R R';

    const answer = ['B', 'R P', 'B P P', 'P R B R', 'P P B B P', 'B R B B B R', 'B B P R P R R'];

    expect(decorateTree(decorations)).toEqual(answer);
  });
  test('#Test 04 - create the tree', () => {
    const decorations = 'R R P R R';

    const answer = ['R', 'R R', 'P B P', 'R B B R', 'R R P R R'];

    expect(decorateTree(decorations)).toEqual(answer);
  });
});
