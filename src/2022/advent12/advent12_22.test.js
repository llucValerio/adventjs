const selectSleigh = require('./advent12_22');

describe('Having advent`s challenge number 12', () => {
  test('#Test 01 - which is the best sleight available', () => {
    const distance = 30;
    const sleighs = [
      { name: 'Gorusuke', consumption: 0.3 },
      { name: 'Madeval', consumption: 0.5 },
      { name: 'Lolivier', consumption: 0.7 },
      { name: 'Hyuuh', consumption: 1 }
    ];

    const answer = 'Madeval';
    // Gorusuke consumes 9W to cover 30 distance
    // Madeval consumes 15W to cover 30 distance
    // Lolivier consumes 21W to cover 30 distance
    // Hyuuh consumes 30W to cover 30 distance

    // The best sleigh to cover the distance is Madeval.

    // Gorusuke covers the distance but it's a worse sleigh
    // Lolivier and Hyuuh can't cover the distance with 20W.

    expect(selectSleigh(distance, sleighs)).toEqual(answer);
  });
});
