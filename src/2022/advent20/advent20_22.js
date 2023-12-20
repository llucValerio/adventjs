function howManyReindeers(reindeerTypes, gifts) {
  const logistic = [];
  const descendantReindeers = reindeerTypes.slice();
  descendantReindeers.sort((a, b) => a.weightCapacity - b.weightCapacity);

  gifts.forEach((gift) => {
    let currentWeight = gift.weight;
    const reindeersArray = descendantReindeers.map((reeinder) => ({ type: reeinder.type, num: 0 }));
    while (currentWeight > 0) {
      for (let renType = 0; renType < descendantReindeers.length; renType += 1) {
        if (currentWeight >= descendantReindeers[renType].weightCapacity) {
          reindeersArray[renType].num += 1;
          currentWeight -= (descendantReindeers[renType].weightCapacity);
        } else {
          break;
        }
      }
    }

    const orderedTrip = reindeersArray
      .filter((reindeer) => reindeer.num > 0)
      .reverse();
    const currentTrip = {
      country: gift.country,
      reindeers: orderedTrip
    };

    logistic.push(currentTrip);
  });

  return logistic;
}

module.exports = howManyReindeers;
