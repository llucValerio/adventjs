function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  const reindeer = ids.sort((a, b) => a - b);

  for (let index = 0; index < reindeer.length; index += 1) {
    if (index !== reindeer[index]) {
      return index;
    }
  }
  return reindeer[reindeer.length - 1] + 1;
}

module.exports = missingReindeer;
