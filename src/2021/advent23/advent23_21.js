function canReconfigure(from, to) {
  // ¡No olvides compartir tu solución en redes!
  if (from.length !== to.length) {
    return false;
  }

  for (let indexFrom = 0; indexFrom < from.length; indexFrom += 1) {
    for (let indexFrom2 = indexFrom; indexFrom2 < from.length; indexFrom2 += 1) {
      if (from[indexFrom] === from[indexFrom2]) {
        if (to[indexFrom] !== to[indexFrom2]) {
          return false;
        }
      }
    }
  }

  for (let indexTo = 0; indexTo < from.length; indexTo += 1) {
    for (let indexTo2 = indexTo; indexTo2 < from.length; indexTo2 += 1) {
      if (to[indexTo] === to[indexTo2]) {
        if (from[indexTo] !== from[indexTo2]) {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = canReconfigure;
