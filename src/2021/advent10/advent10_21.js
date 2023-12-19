function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let takeBack = change;
  const moneyBack = [0, 0, 0, 0, 0, 0];

  do {
    if (takeBack >= 50) {
      takeBack -= 50;
      moneyBack[5] += 1;
    } else if (takeBack >= 20) {
      takeBack -= 20;
      moneyBack[4] += 1;
    } else if (takeBack >= 10) {
      takeBack -= 10;
      moneyBack[3] += 1;
    } else if (takeBack >= 5) {
      takeBack -= 5;
      moneyBack[2] += 1;
    } else if (takeBack >= 2) {
      takeBack -= 2;
      moneyBack[1] += 1;
    } else if (takeBack >= 1) {
      takeBack -= 1;
      moneyBack[0] += 1;
    }
  } while (takeBack > 0);
  return moneyBack;
}

module.exports = getCoins;
