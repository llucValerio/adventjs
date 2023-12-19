function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀

  let mouseRowPos = -1;
  let mouseColPos = -1;
  let mouseMovement = -1;

  const checkPos = (row, col) => {
    if (game[row][col] === '*') {
      return true;
    }
    return false;
  };

  for (let row = 0; row < game.length; row += 1) {
    for (let col = 0; col < game[row].length; col += 1) {
      if (game[row][col] === 'm') {
        mouseRowPos = row;
        mouseColPos = col;
        break;
      }
    }
  }

  if ((mouseRowPos < 0) || (mouseColPos < 0)) {
    return false;
  }
  switch (direction) {
    case 'up':
      mouseMovement = mouseRowPos - 1;
      if (mouseMovement < 0) {
        return false;
      }
      return checkPos(mouseMovement, mouseColPos);

    case 'down':
      mouseMovement = mouseRowPos + 1;
      if (mouseMovement >= game.length) {
        return false;
      }
      return checkPos(mouseMovement, mouseColPos);

    case 'right':
      mouseMovement = mouseColPos + 1;
      if (mouseMovement >= game[mouseRowPos].length) {
        return false;
      }
      return checkPos(mouseRowPos, mouseMovement);

    case 'left':
      mouseMovement = mouseColPos - 1;
      if (mouseMovement < 0) {
        return false;
      }
      return checkPos(mouseRowPos, mouseMovement);

    default:
      return false;
  }
}

module.exports = canMouseEat;
