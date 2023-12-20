function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const sortedCities = [...giftsCities].sort((a, b) => b - a);
  let realMaxGifts = 0;

  for (let index = 0; index < sortedCities.length; index += 1) {
    const cities = [...sortedCities];
    let currentItem = cities.splice(index, 1)[0];
    let numberOfCities = 1;

    for (let j = 0; j < cities.length; j += 1) {
      if (
        cities[j] + currentItem <= Number(maxGifts)
        && numberOfCities < maxCities
      ) {
        currentItem += cities[j];
        numberOfCities += 1;
      }
    }

    if (realMaxGifts < currentItem && currentItem <= maxGifts) {
      realMaxGifts = currentItem;
    }
  }

  return realMaxGifts;
}

module.exports = getMaxGifts;
