function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let tree = '';
  for (let index = 1; index <= height; index += 1) {
    for (let i = 0; i < height - index; i += 1) {
      tree += '_';
    }
    for (let i = 0; i < index + (index - 1); i += 1) {
      tree += '*';
    }
    for (let i = 0; i < height - index; i += 1) {
      tree += '_';
    }
    tree += '\n';
  }
  for (let index = 0; index < 2; index += 1) {
    for (let i = 0; i < height - 1; i += 1) {
      tree += '_';
    }
    tree += '#';
    for (let i = 0; i < height - 1; i += 1) {
      tree += '_';
    }
    if (index < 1) {
      tree += '\n';
    }
  }
  return tree;
}

module.exports = createXmasTree;
