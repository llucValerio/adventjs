function drawGift(size, symbol) {
  let gift3d = '';
  const edgeLines = '#'.repeat(size);
  const inLines = `#${symbol.repeat((size - 2) < 0 ? 0 : size - 2)}#`;
  const midLine = `${'#'.repeat(size)
  + symbol.repeat((size - 2) < 0 ? 0 : size - 2)}#`;

  gift3d = `${gift3d
    + ' '.repeat((size - 1) < 0 ? 0 : size - 1)
  + edgeLines}\n`;

  if (size > 1) {
    for (let index = 0; index < ((size - 2) < 0 ? 0 : size - 2); index += 1) {
      gift3d = `${gift3d
        + ' '.repeat((size - 2) < 0 ? 0 : size - index - 2)
      + inLines + symbol.repeat(index)}#\n`;
    }

    gift3d = `${gift3d + midLine}\n`;

    for (let index = ((size - 2) < 0 ? 0 : size - 2); index > 0; index -= 1) {
      gift3d = `${gift3d
        + inLines
        + symbol.repeat(index - 1)}#\n`;
    }
    gift3d = `${gift3d + edgeLines}\n`;
  }

  return gift3d;
}

module.exports = drawGift;
