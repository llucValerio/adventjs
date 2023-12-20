/* eslint-disable no-param-reassign */
function canExit(maze) {
  let currentRow = -1;
  let currentCol = -1;

  let wayOut = false;

  const mazeRowLimit = maze.length;
  const mazeColLimit = maze[0].length;

  function checkRoute(actualRow, actualCol, path) {
    path[actualRow][actualCol] = 'X';
    // MOVE RIGHT
    if (actualCol + 1 < mazeColLimit) {
      if (maze[actualRow][actualCol + 1] === 'E') {
        return true;
      }
      if (maze[actualRow][actualCol + 1] !== 'W') {
        if (path[actualRow][actualCol + 1] !== 'X') {
          if (checkRoute(actualRow, actualCol + 1, path)) {
            return true;
          }
        }
      }
    }
    // // MOVE DOWN
    if (actualRow + 1 < mazeRowLimit) {
      if (maze[actualRow + 1][actualCol] === 'E') {
        return true;
      }
      if (maze[actualRow + 1][actualCol] !== 'W') {
        if (path[actualRow + 1][actualCol] !== 'X') {
          if (checkRoute(actualRow + 1, actualCol, path)) {
            return true;
          }
        }
      }
    }
    // // MOVE LEFT
    if (actualCol - 1 >= 0) {
      if (maze[actualRow][actualCol - 1] === 'E') {
        return true;
      }
      if (maze[actualRow][actualCol - 1] !== 'W') {
        if (path[actualRow][actualCol - 1] !== 'X') {
          if (checkRoute(actualRow, actualCol - 1, path)) {
            return true;
          }
        }
      }
    }
    // // MOVE UP
    if (actualRow - 1 >= 0) {
      if (maze[actualRow - 1][actualCol] === 'E') {
        return true;
      }
      if (maze[actualRow - 1][actualCol] !== 'W') {
        if (path[actualRow - 1][actualCol] !== 'X') {
          if (checkRoute(actualRow - 1, actualCol, path)) {
            return true;
          }
        }
      }
    }

    path[actualRow][actualCol] = ' ';
    return false;
  }

  for (let row = 0; row < maze.length; row += 1) {
    const col = maze[row].indexOf('S');
    if (col >= 0) {
      currentRow = row;
      currentCol = col;
    }
  }

  const path = maze.map((row) => row.map((column) => column));

  wayOut = checkRoute(currentRow, currentCol, path);

  return wayOut;
}

module.exports = canExit;
