function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!
  let capacity = 0;

  const newCarrier = carriers.find((carrier) => carrier[0] === carrierID);
  capacity += newCarrier[1];

  for (let index = 0; index < newCarrier[2].length; index += 1) {
    capacity += countPackages(carriers, newCarrier[2][index]);
  }

  return capacity;
}

module.exports = countPackages;
