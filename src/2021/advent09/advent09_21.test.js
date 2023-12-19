/* eslint-disable no-script-url */
const groupBy = require('./advent09_21');

describe('Having advent`s challenge number 9', () => {
  test('order by math.floor', () => {
    const arrayToOrder = [6.1, 4.2, 6.3];

    const answer = { 6: [6.1, 6.3], 4: [4.2] };

    expect(groupBy(arrayToOrder, Math.floor)).toEqual(answer);
  });
  test('order by length', () => {
    const arrayToOrder = ['one', 'two', 'three'];

    const answer = { 3: ['one', 'two'], 5: ['three'] };

    expect(groupBy(arrayToOrder, 'length')).toEqual(answer);
  });
  test('order by age', () => {
    const arrayToOrder = [{ age: 23 }, { age: 24 }];

    const answer = { 23: [{ age: 23 }], 24: [{ age: 24 }] };

    expect(groupBy(arrayToOrder, 'age')).toEqual(answer);
  });
  test('order by time stamp', () => {
    const arrayToOrder = [1397639141184, 1363223700000];

    const answer = { 2013: [1363223700000], 2014: [1397639141184] };

    expect(groupBy(arrayToOrder, (timestamp) => new Date(timestamp).getFullYear())).toEqual(answer);
  });
  test('order by rating', () => {
    const arrayToOrder = [
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 }
    ];

    const answer = {
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }]
    };

    expect(groupBy(arrayToOrder, 'rating')).toEqual(answer);
  });
  test('order by rating', () => {
    const arrayToOrder = [
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 },
      { title: 'Waiting for my books', rating: 8 },
      { title: 'Waiting for my books', rating: 8 },
      { title: 'Waiting for my books', rating: 7 },
      { title: 'Last one', rating: 8 }
    ];

    const answer = {
      7: [{ title: 'Waiting for my books', rating: 7 }],
      8: [
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Waiting for my books', rating: 8 },
        { title: 'Waiting for my books', rating: 8 },
        { title: 'Last one', rating: 8 }
      ],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }]
    };

    expect(groupBy(arrayToOrder, 'rating')).toEqual(answer);
  });
});
