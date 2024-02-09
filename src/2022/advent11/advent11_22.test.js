const getCompleted = require('./advent11_22');

describe('Having advent`s challenge number 11', () => {
  test('#Test 01 - how much of the task is completed', () => {
    const invertedTime = '01:00:00';
    const totalTime = '03:00:00';

    const answer = '1/3';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
  test('#Test 02 - how much of the task is completed', () => {
    const invertedTime = '02:00:00';
    const totalTime = '04:00:00';

    const answer = '1/2';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
  test('#Test 03 - how much of the task is completed', () => {
    const invertedTime = '01:00:00';
    const totalTime = '01:00:00';

    const answer = '1/1';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
  test('#Test 04 - how much of the task is completed', () => {
    const invertedTime = '00:10:00';
    const totalTime = '01:00:00';

    const answer = '1/6';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
  test('#Test 05 - how much of the task is completed', () => {
    const invertedTime = '01:10:10';
    const totalTime = '03:30:30';

    const answer = '1/3';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
  test('#Test 06 - how much of the task is completed', () => {
    const invertedTime = '03:30:30';
    const totalTime = '05:50:50';

    const answer = '3/5';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
  test('#Test 07 - how much of the task is completed', () => {
    const invertedTime = '02:30:30';
    const totalTime = '05:01:00';

    const answer = '1/2';

    expect(getCompleted(invertedTime, totalTime)).toEqual(answer);
  });
});
