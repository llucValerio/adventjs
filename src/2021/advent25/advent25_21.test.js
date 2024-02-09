const canMouseEat = require('./advent25_21');

describe('Having advent`s challenge number 25', () => {
  test('#Test 01 - the mouse should not find food going up', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('up', room)).toEqual(answer);
  });
  test('#Test 02 - the mouse should find food going down', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = true;

    expect(canMouseEat('down', room)).toEqual(answer);
  });
  test('#Test 03 - the mouse should not find food going right', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('right', room)).toEqual(answer);
  });
  test('#Test 04 - the mouse should not find food going left', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('left', room)).toEqual(answer);
  });
  test('#Test 05 - the mouse should not find food going up', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('up', room)).toEqual(answer);
  });
  test('#Test 06 - the mouse should not find food going down', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = false;

    expect(canMouseEat('down', room)).toEqual(answer);
  });
  test('#Test 07 - the mouse should find food going right', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const answer = true;

    expect(canMouseEat('right', room)).toEqual(answer);
  });
  test('#Test 08 - the mouse should not find food going left', () => {
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
