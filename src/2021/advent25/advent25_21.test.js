const canMouseEat = require('./advent25_21');

describe('Having advent`s challenge number 25', () => {
  test('the mouse should not find food going up', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('up', room)).toEqual(answer);
  });
  test('the mouse should find food going down', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = true;

    expect(canMouseEat('down', room)).toEqual(answer);
  });
  test('the mouse should not find food going right', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('right', room)).toEqual(answer);
  });
  test('the mouse should not find food going left', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('left', room)).toEqual(answer);
  });
  test('the mouse should not find food going up', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('up', room)).toEqual(answer);
  });
  test('the mouse should not find food going down', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('down', room)).toEqual(answer);
  });
  test('the mouse should find food going right', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = true;

    expect(canMouseEat('right', room)).toEqual(answer);
  });
  test('the mouse should not find food going left', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('left', room)).toEqual(answer);
  });
});
