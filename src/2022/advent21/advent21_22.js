function printTable(gifts) {
  let table = '';
  let topBorder = '';
  let bottomBorder = '';
  const size = {
    gift: 0,
    quantity: 0
  };

  function getChar(char, number) {
    let chain = '';
    for (let index = 0; index < number; index += 1) {
      chain += char;
    }
    return chain;
  }

  gifts.map((gift) => {
    size.gift = gift.name.length >= size.gift ? gift.name.length : size.gift;
    size.quantity = gift.quantity.toString(10).length >= size.quantity
      ? gift.quantity.toString(10).length
      : size.quantity;

    return 0;
  });

  const giftWidth = size.gift > 4 ? size.gift + 2 : 6;
  const quantityWidth = size.quantity > 8 ? size.quantity + 2 : 10;

  topBorder = getChar('+', giftWidth + quantityWidth + 3);
  bottomBorder = getChar('*', giftWidth + quantityWidth + 3);

  table += topBorder;
  table += '\n';
  table += `| Gift${getChar(' ', giftWidth - 5)}| Quantity${getChar(
    ' ',
    quantityWidth - 9
  )}|`;
  table += '\n';
  table += `| ${getChar('-', giftWidth - 2)} | ${getChar(
    '-',
    quantityWidth - 2
  )} |`;
  table += '\n';
  for (let index = 0; index < gifts.length; index += 1) {
    table += `| ${gifts[index].name}${getChar(
      ' ',
      giftWidth - gifts[index].name.length - 2
    )} | ${gifts[index].quantity}${getChar(
      ' ',
      quantityWidth - gifts[index].quantity.toString(10).length - 2
    )} |\n`;
  }
  table += bottomBorder;

  return table;
}

module.exports = printTable;
