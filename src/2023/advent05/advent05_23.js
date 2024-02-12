function cyberReindeer(road, time) {
  const path = [];
  const santaSled = 'S';
  const barrier = '|';
  const openBarrier = '*';

  let newRoad = road;
  let originalPath = road;
  let currentPosition = 0;

  function replaceAt(chain, index, replacement, oldPosition) {
    const newOldPosition = (oldPosition === 'S') ? '.' : oldPosition;

    let newChain = chain.substring(0, index)
    + replacement
    + chain.substring(index + replacement.length);
    if (index > 0) {
      newChain = newChain.substring(0, index - 1)
      + newOldPosition
      + newChain.substring(index - 1 + replacement.length);
    }
    return newChain;
  }

  for (let timeUnit = 0; timeUnit < time; timeUnit += 1) {
    if (timeUnit === 5) {
      newRoad = newRoad.replaceAll(barrier, openBarrier);
      originalPath = originalPath.replaceAll(barrier, openBarrier);
    }
    if (newRoad[currentPosition] !== barrier) {
      newRoad = replaceAt(
        newRoad,
        currentPosition,
        santaSled,
        originalPath[currentPosition - 1]
      );
      currentPosition += 1;
    }
    path.push(newRoad);
  }

  return path;
}

const road = 'S..|...|..';
const time = 10; // units of time

console.log(cyberReindeer(road, time));

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/

module.exports = cyberReindeer;
