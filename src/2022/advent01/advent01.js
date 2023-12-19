function wrapping(gifts) {
  const giftsWrapped = gifts.map((gift) => {
    const paperLong = gift.length + 2;
    const paper = '*'.repeat(paperLong);

    return `${paper}\n*${gift}*\n${paper}`;
  });

  return giftsWrapped;
}

module.exports = wrapping;
