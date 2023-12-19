function countDecorations(bigTree) {
  // ¡No olvides compartir tu solución en redes!
  let totalDecorations = 0;

  totalDecorations += bigTree.value;
  if (bigTree.left !== null) {
    totalDecorations += countDecorations(bigTree.left);
  }
  if (bigTree.right !== null) {
    totalDecorations += countDecorations(bigTree.right);
  }

  return totalDecorations;
}

module.exports = countDecorations;
