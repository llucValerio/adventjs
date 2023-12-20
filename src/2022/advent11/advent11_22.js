function getCompleted(part, total) {
  function hoursToSeconds(date) {
    const dateArray = date.split(':');

    return (Number(dateArray[0]) * 3600) + (Number(dateArray[1]) * 60) + Number(dateArray[2]);
  }

  function minimumFraction(numerator, denominator, divider) {
    if ((numerator % divider === 0) && (denominator % divider === 0)) {
      return [numerator / divider, denominator / divider, true];
    }
    return [numerator, denominator, false];
  }

  const partSeconds = hoursToSeconds(part);
  const totalSeconds = hoursToSeconds(total);

  let finalNumerator = partSeconds;
  let finalDenominator = totalSeconds;

  if (partSeconds >= totalSeconds) {
    return '1/1';
  }
  let finalOperands = [0, 0];

  for (let index = 2; index <= finalNumerator; index += 1) {
    finalOperands = minimumFraction(finalNumerator, finalDenominator, index);
    if (finalOperands[2]) {
      index = 1;
      finalNumerator = finalOperands[0];
      finalDenominator = finalOperands[1];
    }
  }

  return `${finalNumerator}/${finalDenominator}`;
}

module.exports = getCompleted;
