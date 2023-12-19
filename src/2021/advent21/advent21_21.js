function canCarry(capacity, trip) {
  // ¡No olvides compartir tu solución en redes!
  const pointRoutes = [];
  let accumCapacity = 0;

  for (let index = 0; index < trip.length; index += 1) {
    pointRoutes.push({
      position: trip[index][1],
      mode: 'pickUp',
      numberPackages: trip[index][0]
    });
    pointRoutes.push({
      position: trip[index][2],
      mode: 'deliver',
      numberPackages: trip[index][0]
    });
  }

  pointRoutes.sort((firstEl, secondEl) => firstEl.position > secondEl.position);

  for (let index = 0; index < pointRoutes.length; index += 1) {
    if (pointRoutes[index].mode === 'pickUp') {
      accumCapacity += pointRoutes[index].numberPackages;
    } else if (pointRoutes[index].mode === 'deliver') {
      accumCapacity -= pointRoutes[index].numberPackages;
    }

    if (accumCapacity > capacity) {
      return false;
    }
  }

  return true;
}

module.exports = canCarry;
