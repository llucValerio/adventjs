function getIndexsForPalindrome(word) {
  const wordArray = [...word];
  const invertedWordArray = [...wordArray].reverse();

  function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  }

  if (arraysAreEqual(wordArray, invertedWordArray)) {
    return [];
  }

  for (let firstLetter = 0;
    firstLetter < wordArray.length - 1;
    firstLetter += 1) {
    for (let secondLetter = firstLetter + 1;
      secondLetter < wordArray.length;
      secondLetter += 1) {
      const newWordArray = [...wordArray];
      const change = newWordArray[firstLetter];
      newWordArray[firstLetter] = newWordArray[secondLetter];
      newWordArray[secondLetter] = change;
      const newInvertedWordArray = [...newWordArray].reverse();

      if (arraysAreEqual(newWordArray, newInvertedWordArray)) {
        return [firstLetter, secondLetter];
      }
    }
  }

  return null;
}

module.exports = getIndexsForPalindrome;
