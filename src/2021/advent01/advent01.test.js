const contarOvejas = require('./advent01')

describe('Having de advent01 challenge',() => {
    test('',() => {
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