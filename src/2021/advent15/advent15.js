function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let ascending = false;
  let descending = false;
  let answer = true;

  for (let item = 0; item < heights.length; item += 1) {
    if (heights[item] === heights[item + 1]) {
      answer = false;
      break;
    }
    if (heights[item] < heights[item + 1]) {
      if (!descending) {
        ascending = true;
      } else {
        answer = false;
        break;
      }
    }
    if (heights[item] > heights[item + 1]) {
      if (ascending || descending) {
        descending = true;
        ascending = false;
      } else {
        answer = false;
        break;
      }
    }
  }
  if (!descending) {
    answer = false;
  }
  return answer;
}

module.exports = checkSledJump;
