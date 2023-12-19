function fitsInOneBox(boxes) {
  const compare = (box1, box2) => {
    if (box1.l > box2.l) return 1;
    if (box2.l > box1.l) return -1;

    return 0;
  };
  let result = true;
  const orderedBoxes = boxes.sort(compare);

  for (let present = 0; present < orderedBoxes.length - 1; present += 1) {
    const currentElement = orderedBoxes[present];
    const nextElement = orderedBoxes[present + 1];

    if (
      !(currentElement.l < nextElement.l)
      || !(currentElement.w < nextElement.w)
      || !(currentElement.h < nextElement.h)
    ) { result = false; }
  }

  return result;
}

module.exports = fitsInOneBox;
