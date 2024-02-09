const fitsInOneBox = require('./advent04_22');

describe('Having advent`s challenge number 4', () => {
  test('#Test 01 - can pack all the boxes', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toBeTruthy();
  });
  test('#Test 02 - can pack all the boxes', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toBeTruthy();
  });
  test('#Test 03 - can pack all the boxes', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ];

    expect(fitsInOneBox(boxes)).toBeFalsy();
  });
});
