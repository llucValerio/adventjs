function maxProfit(prices) {
  const betterSellPrices = [];

  for (let price = 0; price < prices.length; price += 1) {
    betterSellPrices[price] = prices.slice(price + 1)
      // eslint-disable-next-line max-len
      .reduce((biggerPrice, currentPrice) => (biggerPrice > currentPrice ? biggerPrice : currentPrice), prices[price]) - prices[price];
  }

  const betterWin = betterSellPrices
    .reduce((biggerWin, current) => (biggerWin > current ? biggerWin : current));

  if (betterWin > 0) {
    return betterWin;
  }
  return -1;
}

module.exports = maxProfit;
