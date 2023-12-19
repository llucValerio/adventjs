function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  const oneTicketPrice = 12;
  const fidelityPrice = 250;
  const discount = 0.75;

  const totalPriceWithoutDiscount = times * oneTicketPrice;
  let totalPriceWithDiscount = 0;

  let totalPrice = 0;
  let tempTimes = times;

  for (let index = 0; index < times; index += 1) {
    totalPrice += oneTicketPrice * (discount ** tempTimes);
    tempTimes -= 1;
  }

  totalPriceWithDiscount = fidelityPrice + totalPrice;

  if (totalPriceWithDiscount < totalPriceWithoutDiscount) {
    return true;
  }
  return false;
}

module.exports = shouldBuyFidelity;
