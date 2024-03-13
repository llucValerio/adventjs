const calculateTime = require('./advent13_23');

describe('Having advent`s challenge number 13', () => {
  test('#Test 01 - Less than 7 hours', () => {
    const tasks = ['00:10:00', '01:00:00', '03:30:00'];

    const answer = '-02:20:00';

    expect(calculateTime(tasks)).toEqual(answer);
  });
  test('#Test 02 - More than 7 hours', () => {
    const tasks = ['02:00:00', '05:00:00', '00:30:00'];

    const answer = '00:30:00';

    expect(calculateTime(tasks)).toEqual(answer);
  });
  test('#Test 03 - Less than 7 hours', () => {
    const tasks = [
      '00:45:00',
      '00:45:00',
      '00:00:30',
      '00:00:30'
    ];

    const answer = '-05:29:00';

    expect(calculateTime(tasks)).toEqual(answer);
  });
});
