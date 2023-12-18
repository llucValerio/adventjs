function contarOvejas(ovejas) {
    // aquí tu magia
    const redSheep = ovejas.filter(oveja => oveja.color === 'rojo');
    const redSheepsWithA = redSheep.filter(oveja => {
        if (oveja.name.toLowerCase().includes('a') && oveja.name.toLowerCase().includes('n')) {
            return oveja;
        }
    });
    return redSheepsWithA;
}

module.exports = contarOvejas;