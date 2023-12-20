function getGiftsToRefill(a1, a2, a3) {
  const firstStoreSet = new Set(a1);
  const secondStoreSet = new Set(a2);
  const thirdStoreSet = new Set(a3);

  const firstStoreProducts = [...firstStoreSet];
  const secondStoreProducts = [...secondStoreSet];
  const thirdStoreProducts = [...thirdStoreSet];

  let allGifts = [];

  const searchForProducts = (firstArray, secondArray, thirdArray) => {
    const products = [];

    firstArray.forEach((element) => {
      const secondStore = secondArray.find(
        (secondStoreElement) => secondStoreElement === element
      );
      const thirdStore = thirdArray.find(
        (thirdStoreElement) => thirdStoreElement === element
      );
      if (!secondStore && !thirdStore) {
        products.push(element);
      }
    });

    return products;
  };

  allGifts = allGifts.concat(
    searchForProducts(
      firstStoreProducts,
      secondStoreProducts,
      thirdStoreProducts
    )
  );
  allGifts = allGifts.concat(
    searchForProducts(
      secondStoreProducts,
      firstStoreProducts,
      thirdStoreProducts
    )
  );
  allGifts = allGifts.concat(
    searchForProducts(
      thirdStoreProducts,
      firstStoreProducts,
      secondStoreProducts
    )
  );

  return allGifts;
}

module.exports = getGiftsToRefill;
