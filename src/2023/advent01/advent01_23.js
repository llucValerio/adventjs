function findFirstRepeated(gifts) {
  const elementSet = new Set();

  for (let i = 0; i < gifts.length; i += 1) {
    if (elementSet.has(gifts[i])) return gifts[i];
    elementSet.add(gifts[i]);
  }

  return -1;
}

module.exports = findFirstRepeated;
