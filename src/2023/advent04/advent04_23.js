function decode(message) {
  const originalMessage = message;
  let messageCorrected = '';
  messageCorrected = originalMessage;

  function removeParentheses(messageToCorrect) {
    let messageImproved = messageToCorrect;
    let openParentheses = -1;
    let closeParentheses = -1;
    let partialCorrected = '';

    for (let char = 0; char < messageImproved.length; char += 1) {
      if (messageImproved[char] === '(') {
        openParentheses = char;
      }

      if ((messageImproved[char] === ')')
      && ((closeParentheses === -1) || (closeParentheses < openParentheses))) {
        closeParentheses = char;
      }
    }

    partialCorrected = messageImproved
      .substring(openParentheses + 1, closeParentheses)
      .split('')
      .reverse()
      .join('');

    messageImproved = messageImproved.substring(0, openParentheses)
  + partialCorrected
  + messageImproved.substring(closeParentheses + 1, messageImproved.length);

    return messageImproved;
  }

  while (messageCorrected.includes('(')) {
    messageCorrected = removeParentheses(messageCorrected);
  }

  return messageCorrected;
}

module.exports = decode;
