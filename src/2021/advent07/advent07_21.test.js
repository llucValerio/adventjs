const contains = require('./advent07_21');

describe('Having advent`s challenge number 7', () => {
  test('#Test 01 - camiseta should be on the warehouse', () => {
    const warehouse = {
      estanteria1: {
        cajon1: {
          producto1: 'coca-cola',
          producto2: 'fanta',
          producto3: 'sprite'
        }
      },
      estanteria2: {
        cajon1: 'vacio',
        cajon2: {
          producto1: 'pantalones',
          producto2: 'camiseta' // <- ¡Está aquí!
        }
      }
    };
    const itemSearched = 'camiseta';

    const answer = true;

    expect(contains(warehouse, itemSearched)).toEqual(answer);
  });
  test('#Test 02 - game boy should not be on the warehouse', () => {
    const warehouse = {
      baul: {
        fondo: {
          objeto: 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    };
    const itemSearched = 'gameboy';

    const answer = false;

    expect(contains(warehouse, itemSearched)).toEqual(answer);
  });
  test('#Test 03 - game boy should not be on the warehouse', () => {
    const warehouse = {
      objeto: 'ps5'
    };
    const itemSearched = 'gameboy';

    const answer = false;

    expect(contains(warehouse, itemSearched)).toEqual(answer);
  });
  test('#Test 04 - game boy should not be on an empty warehouse', () => {
    const warehouse = {};
    const itemSearched = 'gameboy';

    const answer = false;

    expect(contains(warehouse, itemSearched)).toEqual(answer);
  });
});
