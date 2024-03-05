const getIndexsForPalindrome = require('./advent11_23');

describe('Having advent`s challenge number 9', () => {
  test('#Test 01 - Is palindrome', () => {
    const text = 'anna';

    const answer = [];

    expect(getIndexsForPalindrome(text)).toEqual(answer);
  });
  test('#Test 02 - Can be palindrome', () => {
    const text = 'abab';

    const answer = [0, 1];

    expect(getIndexsForPalindrome(text)).toEqual(answer);
  });
  test('#Test 03 - Is not a palindrome', () => {
    const text = 'abac';

    const answer = null;

    expect(getIndexsForPalindrome(text)).toEqual(answer);
  });
  test('#Test 04 - Is palindrome', () => {
    const text = 'aaaaaaaa';

    const answer = [];

    expect(getIndexsForPalindrome(text)).toEqual(answer);
  });
  test('#Test 05 - Can be palindrome', () => {
    const text = 'aaababa';

    const answer = [1, 3];

    expect(getIndexsForPalindrome(text)).toEqual(answer);
  });
  test('#Test 06 - Is not a palindrome', () => {
    const text = 'caababa';

    const answer = null;

    expect(getIndexsForPalindrome(text)).toEqual(answer);
  });
});
