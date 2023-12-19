function wrapGifts(gifts) {
  let numChars;
  // ¡No olvides compartir tu solución en redes!
  if (gifts.length > 0) {
    numChars = gifts[0].length + 2;
    const wrapedGifts = gifts.map((gift) => `*${gift}*`);

    let lateral = '';
    for (let index = 0; index < numChars; index += 1) {
      lateral = `${lateral}*`;
    }

    wrapedGifts.unshift(lateral);
    wrapedGifts.push(lateral);

    return wrapedGifts;
  }
  return [];
}

module.exports = wrapGifts;
