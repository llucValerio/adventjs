function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!
  let resultObject = {};

  collection.map((item) => {
    let attributeName;
    if (typeof (it) === 'function') {
      attributeName = it(item);
    } else if (typeof (collection[0]) === 'object') {
      attributeName = item[it];
    } else {
      // eslint-disable-next-line no-eval
      attributeName = eval(`"${item}".${it}`);
    }
    resultObject = {
      [attributeName]: [],
      ...resultObject
    };
    resultObject[attributeName].push(item);
    return 0;
  });

  return resultObject;
}

module.exports = groupBy;
