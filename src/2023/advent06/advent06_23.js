function maxDistance(movements) {
  let moveRightCounter = 0;
  let moveLeftCounter = 0;
  let freeMoveCounter = 0;

  for (let move = 0; move < movements.length; move += 1) {
    if (movements[move] === '>') {
      moveRightCounter += 1;
    }
    if (movements[move] === '<') {
      moveLeftCounter += 1;
    }
    if (movements[move] === '*') {
      freeMoveCounter += 1;
    }
  }

  if (moveRightCounter > moveLeftCounter) {
    return moveRightCounter - moveLeftCounter + freeMoveCounter;
  }
  return moveLeftCounter - moveRightCounter + freeMoveCounter;
}

module.exports = maxDistance;
