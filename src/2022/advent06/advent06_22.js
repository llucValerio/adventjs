function createCube(size) {
  let cube = '';

  const getChain = (numChains, string) => {
    let stringChain = '';
    for (let i = 0; i < numChains; i += 1) {
      stringChain += string;
    }
    return stringChain;
  };

  const getSpaces = (numSpaces) => {
    let stringSpaces = '';
    for (let i = 0; i < Math.abs(numSpaces); i += 1) {
      stringSpaces += ' ';
    }
    return stringSpaces;
  };

  for (let row = 1; row <= size; row += 1) {
    cube += getSpaces(row - size);
    cube += getChain(row, '/\\');
    cube += getChain(size, '_\\');
    cube += '\n';
  }
  for (let row = size; row > 0; row -= 1) {
    cube += getSpaces(row - size);
    cube += getChain(row, '\\/');
    cube += getChain(size, '_/');
    if (row !== 1) {
      cube += '\n';
    }
  }

  return cube;
}

module.exports = createCube;
