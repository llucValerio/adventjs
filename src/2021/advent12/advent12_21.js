function getMinJump(obstacles) {
  // ¡No olvides compartir tu solución en redes!
  let jumps = 1;
  let colision;

  const path = [];

  for (let obstacle = 0; obstacle < obstacles.length; obstacle += 1) {
    path[obstacles[obstacle]] = 'X';
  }
  do {
    colision = false;
    for (let index = 0; index < path.length; index += jumps) {
      if (path[index] === 'X') {
        colision = true;
        break;
      }
    }
    if (colision) {
      jumps += 1;
    }
  } while (colision);
  return jumps;
}

module.exports = getMinJump;
