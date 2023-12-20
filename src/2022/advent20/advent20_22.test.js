const howManyReindeers = require('./advent20_22');

describe('Having advent`s challenge number 20', () => {
  test('Test #1 - returns an array', () => {
    const reindeerTypes = [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ];

    const countries = [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ];

    expect(Array.isArray(howManyReindeers(reindeerTypes, countries))).toStrictEqual(true);
  });
  test('classify reindeers with countries', () => {
    const reindeerTypes = [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ];

    const countries = [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ];

    const answer = [{
      country: 'Spain',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }, {
      country: 'France',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 1 },
        { type: 'Diesel', num: 2 }
      ]
    }, {
      country: 'Italy',
      reindeers: [
        { type: 'Electric', num: 3 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }];

    expect(howManyReindeers(reindeerTypes, countries)).toEqual(answer);
  });
  test('classify reindeers with countries', () => {
    const reindeerTypes = [
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Nuclear', weightCapacity: 50 }
    ];

    const countries = [
      { country: 'Catalunya', weight: 30 },
      { country: 'Euskadi', weight: 50 },
      { country: 'Spain', weight: 1 },
      { country: 'France', weight: 17 }
      // { country: 'Italy', weight: 50 },
      // { country: 'Germany', weight: 7 },
      // { country: 'USA', weight: 100 },
      // { country: 'Japan', weight: 42 },
      // { country: 'Australia', weight: 75 },
      // { country: 'Canada', weight: 23 },
      // { country: 'Russia', weight: 120 },
      // Afegir més regals amb pesos i països diferents
    ];

    const answer = [
      {
        country: 'Catalunya',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      },
      {
        country: 'Euskadi',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      },
      { country: 'Spain', reindeers: [{ type: 'Diesel', num: 1 }] },
      {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      }
    ];

    expect(howManyReindeers(reindeerTypes, countries)).toEqual(answer);
  });
  test('classify reindeers with countries', () => {
    const reindeerTypes = [
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ];

    const countries = [{ country: 'Spain', weight: 37 }];

    const answer = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 2
          },
          {
            type: 'Gasoline',
            num: 2
          },
          {
            type: 'Diesel',
            num: 7
          }
        ]
      }
    ];

    expect(howManyReindeers(reindeerTypes, countries)).toEqual(answer);
  });
  test('classify reindeers with countries', () => {
    const reindeerTypes = [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ];

    const countries = [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ];

    const answer = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1
          },
          {
            type: 'Gasoline',
            num: 3
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1
          },
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3
          },
          {
            type: 'Gasoline',
            num: 3
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      }
    ];

    expect(howManyReindeers(reindeerTypes, countries)).toEqual(answer);
  });
  test('classify reindeers with countries', () => {
    const reindeerTypes = [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 }
    ];

    const countries = [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 }
    ];

    const answer = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Gasoline',
            num: 5
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      }
    ];

    expect(howManyReindeers(reindeerTypes, countries)).toEqual(answer);
  });
  test('classify reindeers with countries', () => {
    const reindeerTypes = [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 8 }
    ];

    const countries = [
      { country: 'Colombia', weight: 50 },
      { country: 'España', weight: 20 }
    ];

    const answer = [
      {
        country: 'Colombia',
        reindeers: [
          { type: 'Gasoline', num: 5 },
          { type: 'Diesel', num: 10 }
        ]
      },
      {
        country: 'España',
        reindeers: [
          { type: 'Gasoline', num: 2 },
          { type: 'Diesel', num: 4 }
        ]
      }
    ];

    expect(howManyReindeers(reindeerTypes, countries)).toEqual(answer);
  });
});
