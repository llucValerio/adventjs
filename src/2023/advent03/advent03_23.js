function findNaughtyStep(original, modified) {
  let result = '';
  const length = original.length > modified.length
    ? original.length
    : modified.length;

  for (let index = 0; index < length; index += 1) {
    if (original[index] !== modified[index]) {
      if (original.length > modified.length) {
        result += original[index];
      } else {
        result += modified[index];
      }
      break;
    }
  }
  return result;
}

module.exports = findNaughtyStep;
