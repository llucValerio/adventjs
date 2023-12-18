function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    let letterValidation = true;
    let openedParentheses = false;
    let emptyParentheses = false;

    for (let index = 0; index < letter.length; index++) {
        switch (letter[index]) {
            case "[":
            case "]":
            case "{":
            case "}":
                letterValidation = false;
                return letterValidation;
            case "(":
                if (openedParentheses) {
                    letterValidation = false;
                    return letterValidation;
                } else {
                    openedParentheses = true;
                    emptyParentheses = true;
                    break;
                }
            case ")":
                if ((!openedParentheses) || (emptyParentheses)) {
                    letterValidation = false;
                    return letterValidation;
                } else {
                    openedParentheses = false;
                    break;
                }
            case " ":
                if (openedParentheses) {
                    letterValidation = false;
                    return letterValidation;
                }
            default:
                letterValidation = true;
                emptyParentheses = false;
                break;
        }
    }
    return letterValidation;
}

module.exports = isValid;