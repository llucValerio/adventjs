function createChristmasTree(ornaments, height) {
  const ornamentsArray = ornaments.split('');
  const lastLine = `${' '.repeat((height - 1 < 0) ? 0 : height - 1)}|\n`;

  let tree = '';
  let ornamentCounter = 0;

  for (let row = 0; row < height; row += 1) {
    tree += ' '.repeat((height - row - 1 < 0) ? 0 : height - row - 1);

    for (let column = 0; column < row + 1; column += 1) {
      tree += ornamentsArray[ornamentCounter];

      if ((column + 1) < row + 1) {
        tree += ' ';
      }

      ornamentCounter += 1;
      if (ornamentCounter >= ornamentsArray.length) {
        ornamentCounter = 0;
      }
    }

    tree += '\n';
  }

  tree += lastLine;

  return tree;
}

module.exports = createChristmasTree;
