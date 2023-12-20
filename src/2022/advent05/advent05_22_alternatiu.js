function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let realMaxGifts = 0;

  function permutations(inputArr) {
    const numPermutations = [];

    const permute = (arr, permutation = []) => {
      if (!arr.length) {
        numPermutations.push(permutation);
        return;
      }

      // eslint-disable-next-line guard-for-in
      for (const i in arr) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);

        permute(curr, permutation.concat(next));
      }
    };

    permute(inputArr);

    return numPermutations;
  }

  const allGiftsPossibilities = permutations(giftsCities);

  for (const setOfGifts of allGiftsPossibilities) {
    let currentMaxGifts = 0;
    for (let i = 0; i < Number(maxCities); i += 1) {
      currentMaxGifts += setOfGifts[i];
      if (
        currentMaxGifts === maxGifts
        || currentMaxGifts + setOfGifts[i + 1] > maxGifts
      ) {
        break;
      }
    }
    if (realMaxGifts < currentMaxGifts && currentMaxGifts <= Number(maxGifts)) {
      realMaxGifts = currentMaxGifts;
    }
  }

  return realMaxGifts;
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
console.log(getMaxGifts([50, 70, 100, 30], 100, 6)); // 100
console.log(getMaxGifts([10, 20, 30, 40], 90, 2)); // 70
