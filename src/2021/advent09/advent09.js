function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!
  let resultObject = {};

  for (let item of collection) {
    let attributeName;
    if (typeof (it) === 'function') {
      attributeName = it(item);
    } else {
      if (typeof (collection[0]) === 'object') {
        attributeName = item[it];
      } else {
        attributeName = eval(`"${item}".${it}`);
      }
    }
    resultObject = {
      [attributeName]: [],
      ...resultObject
    }
    resultObject[attributeName].push(item)
  };
  return resultObject;
}

module.exports = groupBy;