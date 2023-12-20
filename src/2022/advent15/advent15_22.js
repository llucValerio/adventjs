function decorateTree(base) {
  const baseArray = base.split(' ');
  const tree = [];
  tree.push(base);

  function checkDecoration(pair) {
    switch (pair) {
      case 'PP':
        return 'P';
      case 'RR':
        return 'R';
      case 'BB':
        return 'B';
      case 'BP':
      case 'PB':
        return 'R';
      case 'RP':
      case 'PR':
        return 'B';
      case 'BR':
      case 'RB':
        return 'P';
      default:
        return ' ';
    }
  }

  function makeTree(lastTreeLevel) {
    const newLevel = [];
    for (let i = 0; i < lastTreeLevel.length - 1; i += 1) {
      newLevel.push(
        checkDecoration(`${lastTreeLevel[i]}${lastTreeLevel[i + 1]}`)
      );
    }
    tree.unshift(newLevel.join(' '));
    if (newLevel.length > 1) {
      makeTree(newLevel);
    }
  }
  makeTree(baseArray);
  return tree;
}

module.exports = decorateTree;
