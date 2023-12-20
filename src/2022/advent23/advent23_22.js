/* eslint-disable no-param-reassign */
function executeCommands(commands) {
  function Mov(resultArray, operator1, operator2) {
    let value = 0;
    if (operator1.charAt(0) === 'V') {
      const origin = Number(operator1.charAt(operator1.length - 1));
      value = resultArray[origin];
    } else {
      value = Number(operator1);
    }
    const destiny = Number(operator2.charAt(operator2.length - 1));
    resultArray[destiny] = value;

    return resultArray;
  }
  function Add(resultArray, operator1, operator2) {
    const numOperator1 = Number(operator1.charAt(operator1.length - 1));
    const numOperator2 = Number(operator2.charAt(operator2.length - 1));

    resultArray[numOperator1] += resultArray[numOperator2];

    if (resultArray[numOperator1] > 255) {
      resultArray[numOperator1] -= 256;
    }

    return resultArray;
  }
  function Dec(resultArray, operator1) {
    const numOperator1 = Number(operator1.charAt(operator1.length - 1));

    resultArray[numOperator1] -= 1;

    if (resultArray[numOperator1] < 0) {
      resultArray[numOperator1] = 256 + resultArray[numOperator1];
    }

    return resultArray;
  }
  function Inc(resultArray, operator1) {
    const numOperator1 = Number(operator1.charAt(operator1.length - 1));

    resultArray[numOperator1] += 1;

    if (resultArray[numOperator1] > 255) {
      resultArray[numOperator1] -= 256;
    }

    return resultArray;
  }
  function Jmp(resultArray, operator, index) {
    if (resultArray[0] !== 0) {
      return Number(operator - 1);
    }
    return index;
  }

  let executedCommands = [0, 0, 0, 0, 0, 0, 0, 0];

  for (let instruction = 0; instruction < commands.length; instruction += 1) {
    const operators = commands[instruction].split(/[\s,]+/);

    switch (operators[0]) {
      case 'MOV':
        executedCommands = Mov(executedCommands, operators[1], operators[2]);
        break;
      case 'ADD':
        executedCommands = Add(executedCommands, operators[1], operators[2]);
        break;
      case 'DEC':
        executedCommands = Dec(executedCommands, operators[1]);
        break;
      case 'INC':
        executedCommands = Inc(executedCommands, operators[1]);
        break;
      case 'JMP':
        instruction = Jmp(executedCommands, operators[1], instruction);
        break;
      default:
        break;
    }
  }

  return executedCommands;
}

module.exports = executeCommands;
