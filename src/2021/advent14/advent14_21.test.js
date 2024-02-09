const missingReindeer = require('./advent14_21');

describe('Having advent`s challenge number 14', () => {
  test('#Test 01 - missing reeinder 1', () => {
    const reeinders = [0, 2, 3];

    const answer = 1;

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 02 - missing reeinder 4', () => {
    const reeinders = [5, 6, 1, 2, 3, 7, 0];

    const answer = 4;

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 03 - missing reeinder 2', () => {
    const reeinders = [0, 1];

    const answer = 2; // -> 2 (¡es el último el que falta!)

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 04 - missing reeinder 2', () => {
    const reeinders = [3, 0, 1];

    const answer = 2;

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 05 - missing reeinder 8', () => {
    const reeinders = [9, 2, 3, 5, 6, 4, 7, 0, 1];

    const answer = 8;

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 06 - missing reeinder 1', () => {
    const reeinders = [0];

    const answer = 1; // -> 1 (¡es el último el que falta!)

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 07 - missing reeinder 7', () => {
    const reeinders = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11];

    const answer = 7;

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
  test('#Test 08 - missing reeinder 7', () => {
    const reeinders = [];
    for (let i = 0; i < 100; i += 1) {
      if (i !== 7) {
        reeinders.push(i);
      }
    }

    const answer = 7;

    expect(missingReindeer(reeinders)).toEqual(answer);
  });
});
