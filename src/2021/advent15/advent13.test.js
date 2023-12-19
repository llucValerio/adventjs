const checkSledJump = require('./advent15');

describe('Having advent`s challenge number 15', () => {
  test('the route is correct', () => {
    const route = [1, 2, 3, 2, 1];

    const answer = true; // sube y baja de forma estricta;

    expect(checkSledJump(route)).toEqual(answer);
  });
  test('the route is correct', () => {
    const route = [0, 1, 0];

    const answer = true; // sube y baja de forma estricta;

    expect(checkSledJump(route)).toEqual(answer);
  });
  test('the route is correct', () => {
    const route = [0, 3, 2, 1];

    const answer = true; // sube y baja de forma estricta;

    expect(checkSledJump(route)).toEqual(answer);
  });
  test('the route is correct', () => {
    const route = [0, 1000, 1];

    const answer = true; // sube y baja de forma estricta;

    expect(checkSledJump(route)).toEqual(answer);
  });
  test('the route is correct', () => {
    const route = [2, 4, 4, 6, 2];

    const answer = false; // no sube de forma estricta

    expect(checkSledJump(route)).toEqual(answer);
  });
  test('the route is correct', () => {
    const route = [1, 2, 3];

    const answer = false; // sólo sube

    expect(checkSledJump(route)).toEqual(answer);
  });
  test('the route is correct', () => {
    const route = [1, 2, 3, 2, 1, 2, 3];

    const answer = false; // sube y baja y sube... ¡no vale!

    expect(checkSledJump(route)).toEqual(answer);
  });
});
