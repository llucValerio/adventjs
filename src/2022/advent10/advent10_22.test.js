const checkJump = require('./advent10_22');

describe('Having advent`s challenge number 10', () => {
  test('#Test 01 - check the parabola jump between cities', () => {
    const heights = [1, 3, 8, 5, 2];
    /*
    It's `true`.
    The jump goes up-down.

        8 (highest point)
      ↗ ↘
      3   5
    ↗     ↘
    1       2
    */
    expect(checkJump(heights)).toBeTruthy();
  });
  test('#Test 02 - check the parabola jump between cities', () => {
    const heights = [1, 7, 3, 5];
    /*
    It's `false`.
    It goes up-down-up.

      7   5
    ↗ ↘ ↗
    1   3
    */
    expect(checkJump(heights)).toBeFalsy();
  });
  test('#Test 03 - check the parabola jump between cities', () => {
    const heights = [4, 2, 1];

    expect(checkJump(heights)).toBeFalsy();
  });
  test('#Test 04 - check the parabola jump between cities', () => {
    const heights = [4, 2];

    expect(checkJump(heights)).toBeFalsy();
  });
  test('#Test 05 - check the parabola jump between cities', () => {
    const heights = [2, 2];

    expect(checkJump(heights)).toBeFalsy();
  });
  test('#Test 06 - check the parabola jump between cities', () => {
    const heights = [2, 4];

    expect(checkJump(heights)).toBeFalsy();
  });
  test('#Test 07 - check the parabola jump between cities', () => {
    const heights = [1];

    expect(checkJump(heights)).toBeFalsy();
  });
});
