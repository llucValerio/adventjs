const createXmasTree = require('./advent04');

describe('Having advent`s challenge number 4', () => {
  test('5 height tree', () => {
    const height = 5;

    const answer = '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____';
    expect(createXmasTree(height)).toEqual(answer);
  });
  test('3 height tree', () => {
    const height = 3;

    const answer = '__*__\n_***_\n*****\n__#__\n__#__';
    expect(createXmasTree(height)).toEqual(answer);
  });
  test('25 height tree', () => {
    const height = 25;

    const answer = '________________________*________________________\n_______________________***_______________________\n______________________*****______________________\n_____________________*******_____________________\n____________________*********____________________\n___________________***********___________________\n__________________*************__________________\n_________________***************_________________\n________________*****************________________\n_______________*******************_______________\n______________*********************______________\n_____________***********************_____________\n____________*************************____________\n___________***************************___________\n__________*****************************__________\n_________*******************************_________\n________*********************************________\n_______***********************************_______\n______*************************************______\n_____***************************************_____\n____*****************************************____\n___*******************************************___\n__*********************************************__\n_***********************************************_\n*************************************************\n________________________#________________________\n________________________#________________________';
    expect(createXmasTree(height)).toEqual(answer);
  });
});
