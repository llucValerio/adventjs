function listGifts(letter) {
    const expReg = /(\s{2,})/g;
    const letterNoMultipleSpaces = letter.replace(expReg, ' ');
    const giftsArray = letterNoMultipleSpaces.split(' ');

    const gifts = {};

    giftsArray.forEach(gift => {
        if ((gift[0] !== '_') && (gift !== '')) {
            if (gifts.hasOwnProperty(gift)) {
                gifts[gift] = gifts[gift] + 1;
            } else {
                gifts[gift] = 1;
            }
        }
    })
    return gifts;
}

module.exports = listGifts