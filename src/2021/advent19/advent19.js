function learn(time, courses) {
  // ¡No olvides compartir tu solución en redes!
  let course1 = 0;
  let course1Id = 0;
  let course2 = 0;
  let course2Id = 0;

  for (let courseId1 = 0; courseId1 < courses.length; courseId1 += 1) {
    for (let courseId2 = courseId1 + 1; courseId2 < courses.length; courseId2 += 1) {
      if ((courses[courseId1] + courses[courseId2]) <= time) {
        if (((courses[courseId1] + courses[courseId2])) > (course1 + course2)) {
          course1 = courses[courseId1];
          course1Id = courseId1;
          course2 = courses[courseId2];
          course2Id = courseId2;
        }
      }
    }
  }

  if ((course1 === 0) || (course2 === 0)) {
    return null;
  }
  return [course1Id, course2Id];
}

module.exports = learn;
