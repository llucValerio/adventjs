function sortToys(toys, positions) {
  const toysObject = toys.map((toy, index) => ({ toy, position: positions[index] }));
  const sortedToysObject = toysObject.sort((a, b) => a.position - b.position);

  return sortedToysObject.map((object) => object.toy);
}

module.exports = sortToys;
