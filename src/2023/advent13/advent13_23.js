function calculateTime(deliveries) {
  let accTime = 7 * 3600;

  function secondsToTime(seconds) {
    const hours = Math.floor(Math.abs(seconds) / 3600);
    const minutes = Math.floor((Math.abs(seconds) % 3600) / 60);
    const remainingSeconds = Math.abs(seconds) % 60;
    const time = `${seconds > 0 ? '-' : ''}`
    + `${String(hours).padStart(2, '0')}:`
    + `${String(minutes).padStart(2, '0')}:`
    + `${String(remainingSeconds).padStart(2, '0')}`;
    return time;
  }

  deliveries.forEach((time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    accTime -= totalSeconds;
  });

  const result = secondsToTime(accTime);
  return result;
}

module.exports = calculateTime;
