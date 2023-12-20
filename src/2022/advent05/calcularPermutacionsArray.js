const a = ['a', 'l', 'h', 'o'];

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

console.log(permutations(a));
