const listGifts = require('./advent02')

describe('Having de advent01 challenge',() => {
    test('',() => {
        const carta = 'bici coche balón _playstation bici coche peluche'

        const answer = {
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1
          }
        expect(listGifts(carta)).toEqual(answer);
    });
});