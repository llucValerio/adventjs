function contarOvejas(ovejas) {
  const redSheep = ovejas.filter((oveja) => oveja.color === 'rojo');

  const redSheepsWithA = redSheep.filter((oveja) => {
    if (oveja.name.toLowerCase().includes('a') && oveja.name.toLowerCase().includes('n')) {
      return oveja;
    }
    return 0;
  });

  return redSheepsWithA;
}

module.exports = contarOvejas;
