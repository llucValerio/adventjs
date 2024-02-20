const organizeGifts = require('./advent08_23');

describe('Having advent`s challenge number 8', () => {
  test('#Test 02 - Gifts organized to warehouse ^', () => {
    const gifts = '60a';

    const answer = '[a]{a}';

    expect(organizeGifts(gifts)).toEqual(answer);
  });
  test('#Test 02 - Gifts organized to warehouse ^', () => {
    const gifts = '76a11b';

    const answer = '[a]{a}{a}(aaaaaa){b}(b)';

    expect(organizeGifts(gifts)).toEqual(answer);
  });
  test('#Test 03 - Gifts organized to warehouse ^', () => {
    const gifts = '76a11b75d89t6w9547z';

    const answer = '[a]{a}{a}(aaaaaa){b}(b)[d]{d}{d}(ddddd)[t]{t}{t}{t}(ttttttttt)(wwwwww)[z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z][z]{z}{z}{z}{z}(zzzzzzz)';

    expect(organizeGifts(gifts)).toEqual(answer);
  });
});
