const fixFiles = require('./advent18');

describe('Having advent`s challenge number 18', () => {
  test('renaming repeated names', () => {
    const files = ['photo', 'postcard', 'photo', 'photo', 'video'];

    const answer = ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'];

    expect(fixFiles(files)).toEqual(answer);
  });
  test('renaming repeated names', () => {
    const files = ['file', 'file', 'file', 'game', 'game'];

    const answer = ['file', 'file(1)', 'file(2)', 'game', 'game(1)'];

    expect(fixFiles(files)).toEqual(answer);
  });
  test('renaming repeated names', () => {
    // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
    const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];

    const answer = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'];

    expect(fixFiles(files)).toEqual(answer);
  });
});
