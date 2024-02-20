function organizeGifts(gifts) {
  let giftsList = gifts;
  let packaging = '';
  const packages = [];
  let search = /([a-z])/gi.exec(giftsList);

  function organize(numberOfItems, value) {
    const times = Math.trunc(numberOfItems / value);
    return {
      items: times,
      resting: numberOfItems - (value * times)
    };
  }

  while (search) {
    packages.push({
      gift: search[0],
      number: giftsList.slice(0, search.index)
    });

    giftsList = giftsList.slice(search.index + 1);
    search = /([a-z])/gi.exec(giftsList);
  }

  packages.forEach((item) => {
    let orderedGifts = organize(item.number, 50);

    for (let index = 0; index < orderedGifts.items; index += 1) {
      packaging += `[${item.gift}]`;
    }

    orderedGifts = organize(orderedGifts.resting, 10);

    for (let index = 0; index < orderedGifts.items; index += 1) {
      packaging += `{${item.gift}}`;
    }

    if (orderedGifts.resting > 0) {
      packaging += `(${item.gift.repeat(orderedGifts.resting)})`;
    }
  });

  return packaging;
}

module.exports = organizeGifts;
