const printTable = require('./advent21_22');

describe('Having advent`s challenge number 21', () => {
  test('drawing a gifts table', () => {
    const items = [
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 7 }
    ];

    const answer = '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 7        |\n*******************';

    expect(printTable(items)).toEqual(answer);
  });
  test('drawing a gifts table', () => {
    const items = [
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ];

    const answer = '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************';

    expect(printTable(items)).toEqual(answer);
  });
});
