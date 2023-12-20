function checkPart(part) {
  const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  const normalPart = part.toLowerCase().replace(re, '');
  const reversePart = normalPart.split('').reverse().join('');
  let answer = false;

  if (normalPart !== reversePart) {
    for (let i = 0; i < normalPart.length; i += 1) {
      if (normalPart[i] !== reversePart[i]) {
        const arrayNormal = normalPart.split('');
        arrayNormal.splice(i, 1);
        const newNormalPart = arrayNormal.join('');
        const newReversePart = newNormalPart.split('').reverse().join('');

        if (newNormalPart !== newReversePart) {
          const arrayReverse = reversePart.split('');
          arrayReverse.splice(i, 1);
          const newReversePart2 = arrayReverse.join('');
          const newNormalPart2 = newReversePart2.split('').reverse().join('');

          if (newNormalPart2 === newReversePart2) {
            answer = true;
          }
        } else {
          answer = true;
        }
      }
    }
  } else {
    answer = true;
  }

  return answer;
}

module.exports = checkPart;
