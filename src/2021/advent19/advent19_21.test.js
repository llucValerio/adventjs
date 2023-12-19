const learn = require('./advent19_21');

describe('Having advent`s challenge number 19', () => {
  test('which 2 courses can I do in 10 hours', () => {
    const courses = [2, 3, 8, 1, 4];

    const answer = [0, 2];
    // -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

    expect(learn(10, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 15 hours', () => {
    const courses = [2, 10, 4, 1];

    const answer = [1, 2]; // -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

    expect(learn(15, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 25 hours', () => {
    const courses = [10, 15, 20, 5];

    const answer = [0, 1];
    // -> los cursos [0, 1] y [2, 3] completan exactamente
    // con 25 horas pero siempre devolvemos el primero que encontremos

    expect(learn(25, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 8 hours', () => {
    const courses = [8, 2, 1];

    const answer = [1, 2];
    // -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

    expect(learn(8, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 8 hours', () => {
    const courses = [8, 2, 1, 4, 3];

    const answer = [3, 4];
    // -> usamos el máximo tiempo disponible
    // así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

    expect(learn(8, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 4 hours', () => {
    const courses = [10, 14, 20];

    const answer = null; // -> no nos da tiempo a hacer dos cursos

    expect(learn(4, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 5 hours', () => {
    const courses = [5, 5, 5];

    const answer = null; // -> no nos da tiempo a hacer dos cursos

    expect(learn(5, courses)).toEqual(answer);
  });
  test('which 2 courses can I do in 5 hours', () => {
    const courses = [1, 2];

    const answer = [0, 1];

    expect(learn(5, courses)).toEqual(answer);
  });
});
