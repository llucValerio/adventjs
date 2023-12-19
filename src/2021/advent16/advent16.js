function decodeNumbers(symbols) {
  // ¡No olvides compartir tu solución en redes!

  let totalResult = 0;

  function getValue(char) {
    let value;
    switch (char) {
      case '.':
        value = 1;
        break;
      case ',':
        value = 5;
        break;
      case ':':
        value = 10;
        break;
      case ';':
        value = 50;
        break;
      case '!':
        value = 100;
        break;
      default:
        value = NaN;
        break;
    }
    return value;
  }

  for (let index = 0; index < symbols.length; index += 1) {
    let currentValue = getValue(symbols[index]);
    const nextValue = getValue(symbols[index + 1]);

    if (Number.isNaN(currentValue)) {
      totalResult = currentValue;
      break;
    } else if (currentValue < nextValue) {
      currentValue *= -1;
    }

    totalResult += currentValue;
  }
  return totalResult;
}

module.exports = decodeNumbers;
