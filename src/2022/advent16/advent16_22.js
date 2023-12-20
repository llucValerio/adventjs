/* eslint-disable no-useless-escape */
function fixLetter(letter) {
  function checkMarks(char) {
    switch (char) {
      case '.':
      case ',':
      case ':':
      case ';':
      case '!':
      case '?':
        return true;
      default:
        return false;
    }
  }

  function checkCapital(char) {
    switch (char) {
      case '.':
      case '!':
      case '?':
        return true;
      default:
        return false;
    }
  }

  // remove extra spaces and separate marks with spaces
  let arrayLetter = letter.replace(/\,+/g, ' , ');
  arrayLetter = arrayLetter.replace(/\.+/g, ' . ');
  arrayLetter = arrayLetter.replace(/\:+/g, ' : ');
  arrayLetter = arrayLetter.replace(/\;+/g, ' ; ');
  arrayLetter = arrayLetter.replace(/\!+/g, ' ! ');
  arrayLetter = arrayLetter.replace(/\?+/g, ' ? ');
  arrayLetter = arrayLetter.replace(/\s+/g, ' ').trim();

  // Transform words on array.
  arrayLetter = arrayLetter.split(' ');

  let finalPhrase = '';

  for (let index = 0; index < arrayLetter.length; index += 1) {
    if (arrayLetter[index] === 'santa') {
      arrayLetter[index] = 'Santa';
    }
    if (arrayLetter[index] === 'claus') {
      arrayLetter[index] = 'Claus';
    }

    if (checkCapital(arrayLetter[index - 1]) || index === 0) {
      arrayLetter[index] = arrayLetter[index].charAt(0).toUpperCase() + arrayLetter[index].slice(1);
    }

    if (checkMarks(arrayLetter[index + 1]) || (index === arrayLetter.length - 1)) {
      finalPhrase += arrayLetter[index];
    } else {
      finalPhrase = `${finalPhrase + arrayLetter[index]} `;
    }

    if (index === arrayLetter.length - 1) {
      if (!checkMarks(arrayLetter[index])) {
        finalPhrase += '.';
      }
    }
  }

  return finalPhrase;
}

module.exports = fixLetter;
