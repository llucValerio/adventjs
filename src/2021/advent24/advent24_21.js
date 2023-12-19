function checkIsSameTree(treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
  let treeAnswer = true;

  if ((treeA.value !== treeB.value)
  || (typeof (treeA.left) !== typeof (treeB.left))
  || (typeof (treeA.right) !== typeof (treeB.right))) {
    treeAnswer = false;
  } else {
    if (treeA.left !== null) {
      treeAnswer = checkIsSameTree(treeA.left, treeB.left);
    }
    if (treeA.right !== null) {
      treeAnswer = checkIsSameTree(treeA.right, treeB.right);
    }
  }
  return treeAnswer;
}

module.exports = checkIsSameTree;
