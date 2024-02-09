function manufacture(gifts, materials) {
  const result = [];

  gifts.forEach((gift) => {
    let missingLetter = false;
    for (let index = 0; index < gift.length; index += 1) {
      if (!materials.includes(gift[index])) {
        missingLetter = true;
        break;
      }
    }
    if (!missingLetter) {
      result.push(gift);
    }
  });
  return result;
}

module.exports = manufacture;
