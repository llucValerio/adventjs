const drawGift = require('./advent07_23');

describe('Having advent`s challenge number 7', () => {
  test('#Test 01 - 1 units 3D drawing width ^', () => {
    const size = 1;
    const symbol = '^';

    const answer = '#\n';

    expect(drawGift(size, symbol)).toEqual(answer);
  });
  test('#Test 02 - 2 units 3D drawing width ^', () => {
    const size = 2;
    const symbol = '^';

    const answer = ' ##\n###\n##\n';

    expect(drawGift(size, symbol)).toEqual(answer);
  });
  test('#Test 03 - 3 units 3D drawing width x', () => {
    const size = 3;
    const symbol = 'x';

    const answer = '  ###\n #x##\n###x#\n#x##\n###\n';

    expect(drawGift(size, symbol)).toEqual(answer);
  });
  test('#Test 04 - 4 units 3D drawing width +', () => {
    const size = 4;
    const symbol = '+';

    const answer = '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n';

    expect(drawGift(size, symbol)).toEqual(answer);
  });
  test('#Test 05 - 5 units 3D drawing width *', () => {
    const size = 5;
    const symbol = '*';

    const answer = '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n';

    expect(drawGift(size, symbol)).toEqual(answer);
  });
  test('#Test 06 - 6 units 3D drawing width *', () => {
    const size = 6;
    const symbol = '*';

    const answer = '     ######\n    #****##\n   #****#*#\n  #****#**#\n #****#***#\n######****#\n#****#***#\n#****#**#\n#****#*#\n#****##\n######\n';

    expect(drawGift(size, symbol)).toEqual(answer);
  });
});
