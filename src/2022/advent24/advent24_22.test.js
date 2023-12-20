const canExit = require('./advent24_22');

describe('Having advent`s challenge number 24', () => {
  test('has the maze exit', () => {
    const maze = [
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ];

    // You can exit because you start at [0, 4]
    // and there's a path to the exit which is [4, 4]

    expect(canExit(maze)).toBeTruthy();
  });
  test('has the maze exit', () => {
    const maze = [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ];

    // There's no way to get from [0, 4] to [4, 4]

    expect(canExit(maze)).toBeFalsy();
  });
  test('has the maze exit', () => {
    const maze = [
      [' ', 'S', ' ', ' '],
      [' ', ' ', 'W', ' '],
      [' ', 'W', ' ', ' '],
      ['W', 'E', ' ', ' ']
    ];

    expect(canExit(maze)).toBeTruthy();
  });
  test('has the maze exit', () => {
    const maze = [
      [' ', 'S', ' ', ' '],
      [' ', ' ', 'W', ' '],
      [' ', 'W', ' ', ' '],
      ['W', 'E', 'W', ' ']
    ];

    expect(canExit(maze)).toBeFalsy();
  });
  test('has the maze exit', () => {
    const maze = [
      [' ', 'S', ' '],
      [' ', ' ', 'W'],
      [' ', 'W', ' '],
      [' ', 'E', 'W']
    ];

    expect(canExit(maze)).toBeTruthy();
  });
  test('has the maze exit', () => {
    const maze = [
      [' ', 'S', ' ', ' ', 'W', ' '],
      [' ', 'E', ' ', ' ', ' ', ' ']
    ];

    expect(canExit(maze)).toBeTruthy();
  });
});
