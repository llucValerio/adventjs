function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!
  const lowerLetter = letter
    .toLowerCase()
    .trim()
    .replace(/ /g, '')
    .replace(/á/g, 'a')
    .replace(/à/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ë/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ì/g, 'i')
    .replace(/ï/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ò/g, 'o')
    .replace(/ö/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ù/g, 'u')
    .replace(/ü/g, 'u')
    .split('')
    .sort()
    .filter((element, index, array) => {
      if (element !== array[index + 1]) {
        if (((element.charCodeAt() >= 97) && (element.charCodeAt() <= 122))
         || (element.charCodeAt() === 241)) {
          return element;
        }
      }
      return 0;
    })
    .join('');

  if (lowerLetter.length < 27) {
    return false;
  }
  return true;
}

module.exports = pangram;
