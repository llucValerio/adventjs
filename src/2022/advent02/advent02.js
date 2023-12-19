// Funció original.
function countHoursControlingLeapYear(year, holidays) {
  let extraHours = 0;
  const leap = new Date(year, 1, 29).getDate() === 29;
  const checkHolidays = holidays.map((day) => {
    if (!leap && day === '02/29') {
      return `03/01/${year}`;
    }
    return `${day}/${year}`;
  });

  const uniqueHolidays = Array.from(new Set(checkHolidays));

  for (const day of uniqueHolidays) {
    const weekDay = new Date(day).getDay();

    if (weekDay !== 6 && weekDay !== 0 && day !== '12/31') {
      extraHours += 2;
    }
  }
  return extraHours;
}

// Aquesta tenia millor puntuació en els tests tot i que
// com a mínim hi ha un cas que no contempla -""-
function countHours(year, holidays) {
  const uniqueHolidays = Array.from(new Set(holidays));
  let extraHours = 0;

  for (const day of uniqueHolidays) {
    const fullDay = `${day}/${year}`;
    const weekDay = new Date(fullDay).getDay();

    if (weekDay !== 6 && weekDay !== 0 && day !== '12/31') {
      extraHours += 2;
    }
  }
  return extraHours;
}

module.exports = countHours;
module.exports = countHoursControlingLeapYear;
