const cyberReindeer = require('./advent05_23');

describe('Having advent`s challenge number 5', () => {
  test('#Test 01 - With a concret road and a concret amount of time', () => {
    const road = 'S..|...|..';
    const time = 10; // units of time

    const answer = [
      'S..|...|..', // initial state
      '.S.|...|..', // sled advances on the road
      '..S|...|..', // sled advances on the road
      '..S|...|..', // sled stops at the barrier
      '..S|...|..', // sled stops at the barrier
      '...S...*..', // barrier opens, sled advances
      '...*S..*..', // sled advances on the road
      '...*.S.*..', // sled advances on the road
      '...*..S*..', // sled advances on the road
      '...*...S..' // passes through the open barrier
    ];

    expect(cyberReindeer(road, time)).toEqual(answer);
  });
});
