const isValid = require('./advent03')

describe('Having advent`s challenge number 3',() => {
    test('',() => {
        const carta = "bici coche (balón) bici coche peluche";
        
        expect(isValid(carta)).toEqual(true);
    });
    test('',() => {
        const carta = "(muñeca) consola bici";
        
        expect(isValid(carta)).toEqual(true);
    });
    test('',() => {
        const carta = "bici coche (balón bici coche";
        
        expect(isValid(carta)).toEqual(false);
    });
    test('',() => {
        const carta = "peluche (bici [coche) bici coche balón";
        
        expect(isValid(carta)).toEqual(false);
    });
    test('',() => {
        const carta = "(peluche {) bici";
        
        expect(isValid(carta)).toEqual(false);
    });
    test('',() => {
        const carta = "() bici";
        
        expect(isValid(carta)).toEqual(false);
    });
    test('',() => {
        const carta = "bici (balón bici coche";
        
        expect(isValid(carta)).toEqual(false);
    });
});