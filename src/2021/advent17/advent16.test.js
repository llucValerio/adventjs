const countPackages = require('./advent17');

describe('Having advent`s challenge number 17', () => {
  test('how much packages can be transported', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []]
    ];

    const answer = 9; // 5 de dapelu, 2 de midu y 2 de jelowing = 9

    expect(countPackages(carriers, 'dapelu')).toEqual(answer);
  });
  test('how much packages can be transported', () => {
    const carriers = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []]
    ];

    const answer = 15;
    // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15

    expect(countPackages(carriers, 'camila')).toEqual(answer);
  });
});
