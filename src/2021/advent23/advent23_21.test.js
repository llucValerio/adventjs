const canReconfigure = require('./advent23_21');

describe('Having advent`s challenge number 23', () => {
  test('#Test 01 - can be the machine reconfigured', () => {
    const from = 'BAL';
    const to = 'LIB';

    const answer = true;
    /* la transformación sería así:
    B -> L
    A -> I
    L -> B
    */

    expect(canReconfigure(from, to)).toEqual(answer);
  });
  test('#Test 02 - can be the machine reconfigured', () => {
    const from = 'CON';
    const to = 'JUU';

    const answer = false;
    /* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

    expect(canReconfigure(from, to)).toEqual(answer);
  });
  test('#Test 03 - can be the machine reconfigured', () => {
    const from = 'XBOX';
    const to = 'XXBO';

    const answer = false;
    /* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no
  puede asignarse a la X que ya se asignó a otra)
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

    expect(canReconfigure(from, to)).toEqual(answer);
  });
  test('#Test 04 - can be the machine reconfigured', () => {
    const from = 'XBOX';
    const to = 'XOBX';

    const answer = true;

    expect(canReconfigure(from, to)).toEqual(answer);
  });
  test('#Test 05 - can be the machine reconfigured', () => {
    const from = 'MMM';
    const to = 'MID';

    const answer = false;
    /* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

    expect(canReconfigure(from, to)).toEqual(answer);
  });
  test('#Test 06 - can be the machine reconfigured', () => {
    const from = 'AA';
    const to = 'MID';

    const answer = false; // no tiene la misma longitud;

    expect(canReconfigure(from, to)).toEqual(answer);
  });
});
