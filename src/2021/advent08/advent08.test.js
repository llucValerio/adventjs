const maxProfit = require('./advent08')

describe('Having advent`s challenge number 8',() => {
    test('maximum profit is 16',() => {
        const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
        
        const answer = 16; // -> 16 (compra a 18, vende a 34)
        
        expect(maxProfit(pricesBtc)).toEqual(answer);
    });
    test('maximum profit is 60',() => {
      const pricesBtc = [10, 20, 30, 40, 50, 60, 70];
      
      const answer = 60; // -> 60 (compra a 10, vende a 70)
      
      expect(maxProfit(pricesBtc)).toEqual(answer);
    });
    test('maximum profit is -1 (no profit at all)',() => {
      const pricesBtc = [18, 15, 12, 11, 9, 7];
      
      const answer = -1; // -> -1 (no hay ganancia posible)
      
      expect(maxProfit(pricesBtc)).toEqual(answer);
    });
    test('maximum profit is -1 (no profit at all)',() => {
      const pricesBtc = [3, 3, 3, 3, 3];
      
      const answer = -1; // -> -1 (no hay ganancia posible)
      
      expect(maxProfit(pricesBtc)).toEqual(answer);
    });
});