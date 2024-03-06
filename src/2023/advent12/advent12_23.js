function checkIsValidCopy(original, copy) {
  // A --> 65
  // Z --> 90
  // a --> 97
  // z --> 122
  // # --> 35
  // + --> 43
  // : --> 58
  // . --> 46
  //   --> 32

  let result = true;

  if (original.length !== copy.length) {
    return false;
  }

  if (original === copy) {
    return true;
  }

  for (let char = 0; char < copy.length; char += 1) {
    if (copy[char] !== original[char]) {
      switch (true) {
        case ((original.charCodeAt(char) >= 65)
        && (original.charCodeAt(char) <= 90)):
          result = original[char].toLowerCase() === copy[char]
          || (copy.charCodeAt(char) === 35)
          || (copy.charCodeAt(char) === 43)
          || (copy.charCodeAt(char) === 58)
          || (copy.charCodeAt(char) === 46)
          || (copy.charCodeAt(char) === 32);
          break;
        case ((original.charCodeAt(char) >= 97)
        && (original.charCodeAt(char) <= 122)):
          result = (copy.charCodeAt(char) === 35)
          || (copy.charCodeAt(char) === 43)
          || (copy.charCodeAt(char) === 58)
          || (copy.charCodeAt(char) === 46)
          || (copy.charCodeAt(char) === 32);
          break;
        case (original.charCodeAt(char) === 35):
          result = copy.charCodeAt(char) === 43
          || (copy.charCodeAt(char) === 58)
          || (copy.charCodeAt(char) === 46)
          || (copy.charCodeAt(char) === 32);
          break;
        case (original.charCodeAt(char) === 43):
          result = copy.charCodeAt(char) === 58
          || (copy.charCodeAt(char) === 46)
          || (copy.charCodeAt(char) === 32);
          break;
        case (original.charCodeAt(char) === 58):
          result = copy.charCodeAt(char) === 46
          || (copy.charCodeAt(char) === 32);
          break;
        case (original.charCodeAt(char) === 46):
          result = copy.charCodeAt(char) === 32;
          break;
        case (original.charCodeAt(char) === 32):
          result = copy.charCodeAt(char) === 32;
          break;
        default:
          return false;
      }
      if (!result) {
        return result;
      }
    }
  }

  return result;
}

module.exports = checkIsValidCopy;
