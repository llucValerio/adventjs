const checkPart = require('./advent08_22');

describe('Having advent`s challenge number 8', () => {
  test('is `uwu` a palindrom', () => {
    const palindrome = 'uwu';
    // "uwu" is a palindrome without removing any character

    expect(checkPart(palindrome)).toBeTruthy();
  });
  test('is `miidim` a palindrom', () => {
    const palindrome = 'miidim';
    // "miidim" can be a palindrome after removing the first "i"

    expect(checkPart(palindrome)).toBeTruthy();
  });
  test('is `midu` a palindrom', () => {
    const palindrome = 'midu';
    // "midu" cannot be a palindrome after removing a character

    expect(checkPart(palindrome)).toBeFalsy();
  });
});
