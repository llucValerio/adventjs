const contarOvejas = require('./advent01')

describe('Having advent`s challenge number 1',() => {
    test('sheeps with red and n&a on the name',() => {
        const ovejas = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' },
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo' }
        ]
        const answer = [
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' }
        ]
        expect(contarOvejas(ovejas)).toEqual(answer);
    });
});