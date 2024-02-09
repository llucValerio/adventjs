const getMinJump = require('./advent12_21');

describe('Having advent`s challenge number 12', () => {
  test('#Test 01 - how far the jump to avoid obstacles', () => {
    const obstacles = [5, 3, 6, 7, 9];

    const answer = 4;
    // S es salto, X es obstáculo
    /* Así quedaría la representación:
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      .  .  .  X  .  X  X  X  .  X  .
      S-----------S-----------S-------
      */

    expect(getMinJump(obstacles)).toEqual(answer);
  });
  test('#Test 02 - how far the jump to avoid obstacles', () => {
    const obstacles = [2, 4, 6, 8, 10];

    const answer = 7;
    // Longitudes de salto:
    // 1 caería en el 2
    // 2 caería en el 2
    // 3 caería en el 6
    // 4 caería en el 4
    // 5 caería en el 10
    // 6 caería en el 6
    // 7 es el ideal!!! ✅

    expect(getMinJump(obstacles)).toEqual(answer);
  });
  test('#Test 03 - how far the jump to avoid obstacles', () => {
    const obstacles = [1, 2, 3, 5];

    const answer = 4;

    expect(getMinJump(obstacles)).toEqual(answer);
  });
  test('#Test 04 - how far the jump to avoid obstacles', () => {
    const obstacles = [3, 7, 5];

    const answer = 2;

    expect(getMinJump(obstacles)).toEqual(answer);
  });
  test('#Test 05 - how far the jump to avoid obstacles', () => {
    const obstacles = [9, 5, 1];

    const answer = 2;

    expect(getMinJump(obstacles)).toEqual(answer);
  });
});
