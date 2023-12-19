function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  let answerArray = null;
  if (numbers.length < 2) {
    return null;
  }
  for (let item1 = 0; item1 < numbers.length; item1 += 1) {
    for (let item2 = 0; item2 < numbers.length; item2 += 1) {
      if (item1 !== item2) {
        if ((numbers[item1] + numbers[item2]) === result) {
          answerArray = [numbers[item1], numbers[item2]];
          return answerArray;
        }
      }
    }
  }

  return null;
}

module.exports = sumPairs;
