function carryGifts(gifts, maxWeight) {
  let currentWeight = 0;
  let currentGift = '';
  const presentsBag = [];

  gifts.map((gift) => {
    if (gift.length + currentWeight <= maxWeight) {
      currentGift = currentGift.length ? `${currentGift} ${gift}` : `${gift}`;
      currentWeight = gift.length + currentWeight;
    } else if (gift.length <= maxWeight) {
      presentsBag.push(currentGift);
      currentGift = `${gift}`;
      currentWeight = gift.length;
    }
    return 0;
  });

  // eslint-disable-next-line no-unused-expressions
  currentGift.length ? presentsBag.push(currentGift) : null;

  return presentsBag;
}

module.exports = carryGifts;
