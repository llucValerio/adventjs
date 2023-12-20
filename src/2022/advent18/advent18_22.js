function dryNumber(dry, numbers) {
  const dryNumbers = [];
  for (let index = 1; index <= numbers; index += 1) {
    if (index.toString().includes(dry)) {
      dryNumbers.push(index);
    }
  }
  return dryNumbers;
}

module.exports = dryNumber;
