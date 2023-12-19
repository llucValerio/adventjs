function maxProfit(prices) {
  let sellPrice = 0;
  let buyPrice = 0;
  let betterSellPrices = [];

  for (let price = 0; price < prices.length; price += 1) {
    betterSellPrices[price] = prices.slice(price + 1).reduce((biggerPrice, currentPrice) => biggerPrice > currentPrice ? biggerPrice : currentPrice, prices[price]) - prices[price];
  }

  const betterWin = betterSellPrices.reduce((biggerWin, current) => biggerWin > current ? biggerWin : current);

  if (betterWin > 0) {
    return betterWin;
  } else {
    return -1
  }
}

module.exports = maxProfit;
