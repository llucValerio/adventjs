function checkStepNumbers(systemNames, stepNumbers) {
  let checkStepNumbersAnswer = true;
  const actualSystemNames = [...new Set(systemNames)];
  const completeSystem = {};

  systemNames.forEach((name, index) => {
    if (completeSystem[name] === undefined) {
      completeSystem[name] = [];
    }
    completeSystem[name].push(stepNumbers[index]);
  });

  actualSystemNames.forEach((act) => {
    for (let i = 0; i < completeSystem[act].length - 1; i += 1) {
      if (completeSystem[act][i] >= completeSystem[act][i + 1]) {
        checkStepNumbersAnswer = false;
        break;
      }
    }
  });

  return checkStepNumbersAnswer;
}

module.exports = checkStepNumbers;
