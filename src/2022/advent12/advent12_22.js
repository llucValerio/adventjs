function selectSleigh(distance, sleighs) {
  let choosenSleigh = null;

  for (let i = sleighs.length - 1; i >= 0; i -= 1) {
    if (sleighs[i].consumption * distance <= 20) {
      choosenSleigh = sleighs[i].name;
      break;
    }
  }

  return choosenSleigh;
}

module.exports = selectSleigh;
