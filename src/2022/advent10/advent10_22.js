function checkJump(heights) {
  let check = true;
  let ascending = false;
  let descending = false;

  for (let index = 0; index < heights.length - 1; index += 1) {
    if (heights[index + 1] > heights[index]) {
      ascending = true;
      if (descending) {
        check = false;
        break;
      }
    }
    if (heights[index + 1] < heights[index]) {
      descending = true;
    }
  }

  if (!ascending || !descending) {
    check = false;
  }

  return check;
}

module.exports = checkJump;
