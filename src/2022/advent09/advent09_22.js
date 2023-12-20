function countTime(leds) {
  let totalTime = 0;
  let ledsArray = leds;
  const temporalArray = [...ledsArray];

  const ledsTurnedOff = (array) => {
    const newSet = new Set(array);
    const newArray = [...newSet];
    if (newArray.length === 1) {
      return false;
    }
    return true;
  };

  if (!ledsTurnedOff(leds)) {
    return 0;
  }

  do {
    for (let index = 0; index < ledsArray.length; index += 1) {
      if (ledsArray[index] === 0) {
        if (index === 0) {
          if (ledsArray[ledsArray.length - 1] !== 0) {
            temporalArray[index] = 1;
          }
        } else if (ledsArray[index - 1] !== 0) {
          temporalArray[index] = 1;
        }
      }
    }
    ledsArray = [...temporalArray];
    totalTime += 7;
  } while (ledsTurnedOff(ledsArray));

  return totalTime;
}

module.exports = countTime;
