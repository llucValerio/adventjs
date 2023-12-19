function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes!
  const filesFixed = files;
  let numRepeat;

  for (let index = 0; index < filesFixed.length; index += 1) {
    const file = filesFixed[index];
    numRepeat = 1;
    for (let secondIndex = index + 1; secondIndex < filesFixed.length; secondIndex += 1) {
      if (file === filesFixed[secondIndex]) {
        filesFixed[secondIndex] = `${filesFixed[secondIndex]}(${numRepeat})`;
        numRepeat += 1;
      }
    }
  }
  return filesFixed;
}

module.exports = fixFiles;
