const countDecorations = require('./advent22');

describe('Having advent`s challenge number 22', () => {
  test('how many decorations for the tree', () => {
    const tree = {
      value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
      left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
      },
      right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
      }
    };

    const answer = 6;

    expect(countDecorations(tree)).toEqual(answer);
  });
  test('how many decorations for the tree', () => {
    const tree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    };

    const answer = 28;

    expect(countDecorations(tree)).toEqual(answer);
  });
});
