function getOptimalPath(path) {
  const possiblePaths = [];

  function calcSon(currentValue, currentLevel, currentArray, fatherPos) {
    if (currentLevel >= path.length - 1) {
      for (let i = 0; i < 2; i += 1) {
        const newFinalValue = currentValue + currentArray[fatherPos + i];
        possiblePaths.push(newFinalValue);
      }
    } else {
      for (let i = 0; i <= currentLevel; i += 1) {
        const newValue = currentValue + currentArray[i];
        calcSon(newValue, currentLevel + 1, path[currentLevel + 1], i);
      }
    }
  }

  calcSon(0, 0, path[0], 0);

  return Math.min(...possiblePaths);
}

module.exports = getOptimalPath;
