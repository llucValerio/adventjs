const executeCommands = require('./advent23_22');

describe('Having advent`s challenge number 23', () => {
  test('#Test 01 - result of computing array', () => {
    const commands = [
      'MOV 5,V00', // V00 is 5
      'MOV 10,V01', // V01 is 10
      'DEC V00', // V00 is now 4
      'ADD V00,V01' // V00 = V00 + V01 = 14
    ];

    const answer = [
      14, 10, 0, 0,
      0, 0, 0, 0
    ];

    expect(executeCommands(commands)).toEqual(answer);
  });
  test('#Test 02 - result of computing array', () => {
    const commands = [
      'MOV 255,V00', // V00 is 255
      'INC V00', // V00 is 256, overflows to 0
      'DEC V01', // V01 is -1, overflows to 255
      'DEC V01' // V01 is 254
    ];

    const answer = [
      0, 254, 0, 0,
      0, 0, 0, 0
    ];

    expect(executeCommands(commands)).toEqual(answer);
  });
  test('#Test 03 - result of computing array', () => {
    const commands = [
      'MOV 10,V00', // V00 is 10
      'DEC V00', // decrement V00 by 1  <---┐
      'INC V01', // increment V01 by 1      |
      'JMP 1', // loop until V00 is 0 ----┘
      'INC V06' // increment V06 by 1
    ];

    const answer = [
      0, 10, 0, 0,
      0, 0, 1, 0
    ];

    expect(executeCommands(commands)).toEqual(answer);
  });

  test('#Test 04 - result of computing array', () => {
    const commands = [
      'MOV 5,V00',
      'MOV 10,V01',
      'MOV V00,VO2',
      'MOV V04,V01'
    ];

    const answer = [
      5, 0, 5, 0,
      0, 0, 0, 0
    ];

    expect(executeCommands(commands)).toEqual(answer);
  });
});
