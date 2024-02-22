const adjustLights = require('./advent09_23');

describe('Having advent`s challenge number 9', () => {
  test('#Test 01 - Lights to be adjusted', () => {
    const lights = ['🟢', '🔴', '🟢', '🟢', '🟢'];

    const answer = 1;
    // -> 1 (you change the fourth light to 🔴)

    expect(adjustLights(lights)).toEqual(answer);
  });
  test('#Test 02 - Lights to be adjusted', () => {
    const lights = ['🔴', '🔴', '🟢', '🟢', '🔴'];

    const answer = 2;
    // -> 2 (you change the second light to 🟢 and the third to 🔴)

    expect(adjustLights(lights)).toEqual(answer);
  });
  test('#Test 03 - Lights to be adjusted', () => {
    const lights = ['🟢', '🔴', '🟢', '🔴', '🟢'];

    const answer = 0;
    // -> 0 (they are already alternating)

    expect(adjustLights(lights)).toEqual(answer);
  });
  test('#Test 04 - Lights to be adjusted', () => {
    const lights = ['🔴', '🔴', '🔴'];

    const answer = 1;
    // -> 1 (you change the second light to 🟢)

    expect(adjustLights(lights)).toEqual(answer);
  });
});
