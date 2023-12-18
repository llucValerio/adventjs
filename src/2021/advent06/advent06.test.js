const sumPairs = require('./advent06')

describe('Having advent`s challenge number 6',() => {
    test('sum pairs for 10',() => {
        const pairsArray = [3, 5, 7, 2];
        const neededResult = 10;
        
        const answer = [3, 7];
        
        expect(sumPairs(pairsArray,neededResult)).toEqual(answer);
    });
    test('sum pairs for 10',() => {
        const pairsArray = [-3, -2, 7, -5];
        const neededResult = 10;
        
        const answer = null;
        
        expect(sumPairs(pairsArray,neededResult)).toEqual(answer);
    });
    test('sum pairs for 4',() => {
        const pairsArray = [2, 2, 3, 1];
        const neededResult = 4;
        
        const answer = [2, 2];
        
        expect(sumPairs(pairsArray,neededResult)).toEqual(answer);
    });
    test('sum pairs for 8',() => {
        const pairsArray = [6, 7, 1, 2];
        const neededResult = 8;
        
        const answer = [6, 2];
        
        expect(sumPairs(pairsArray,neededResult)).toEqual(answer);
    });
    test('sum pairs for 6',() => {
        const pairsArray = [0, 2, 2, 3, -1, 1, 5];
        const neededResult = 6;
        
        const answer = [1, 5];
        
        expect(sumPairs(pairsArray,neededResult)).toEqual(answer);
    });
});