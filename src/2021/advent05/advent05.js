function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const xMas = new Date('2021/12/25');
    const answer = Math.ceil((xMas.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    return answer
}

module.exports = daysToXmas;