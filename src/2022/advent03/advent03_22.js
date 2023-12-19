function distributeGifts(packOfGifts, reindeers) {
  const packWeights = packOfGifts.reduce(
    (accWeight, currentElement) => accWeight + currentElement.length,
    0
  );
  const reindeersCapacity = reindeers.reduce(
    (accCapacity, currentReinder) => accCapacity + currentReinder.length * 2,
    0
  );

  return Math.floor(reindeersCapacity / packWeights);
}

module.exports = distributeGifts;
