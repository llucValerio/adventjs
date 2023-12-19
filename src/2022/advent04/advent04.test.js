const fitsInOneBox = require('./advent04');

describe('Having advent`s challenge number 4', () => {
  test('can pack all the boxes', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toBeTruthy();
  });
  test('can pack all the boxes', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toBeTruthy();
  });
  test('can pack all the boxes', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ];

    expect(fitsInOneBox(boxes)).toBeFalsy();
  });
});
