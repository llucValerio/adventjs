function adjustLights(lights) {
  const greenLight = '🟢';
  const redLight = '🔴';
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num % 2 === 1;
  let greenIterations = 0;
  let redIterations = 0;

  for (let light = 0; light < lights.length; light += 1) {
    if (isEven(light)) {
      if (lights[light] === redLight) {
        greenIterations += 1;
      }
      if (lights[light] === greenLight) {
        redIterations += 1;
      }
    }
    if (isOdd(light)) {
      if (lights[light] === greenLight) {
        greenIterations += 1;
      }
      if (lights[light] === redLight) {
        redIterations += 1;
      }
    }
  }

  if (greenIterations <= redIterations) {
    return greenIterations;
  }
  return redIterations;
}

module.exports = adjustLights;
