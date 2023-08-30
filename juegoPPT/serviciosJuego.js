obtenerAleatorio = function() {

    let numAleatorio;
    let numJuego;
    let numEntero;
    let resultado;

    numAleatorio = Math.random();
    numJuego = numAleatorio * 3;
    numEntero = parseInt(numJuego);

    resultado = numEntero + 1;
    return resultado;
}

generarElemento = function() {

    let numAleatorio = obtenerAleatorio();
    let elemento;

    if (numAleatorio === 1) {
        elemento = "piedra";
    } else if (numAleatorio === 2) {
        elemento = "papel";
    } else if (numAleatorio === 3) {
        elemento = "tijera";
    }

    return elemento;
}

determinarGanador = function(eleccionJug1, eleccionJug2) {

    if (eleccionJug1 === eleccionJug2) {
        return 0;

    } else if (
        (eleccionJug1 === "piedra" && eleccionJug2 === "tijera") ||
        (eleccionJug1 === "papel" && eleccionJug2 === "piedra") ||
        (eleccionJug1 === "tijera" && eleccionJug2 === "papel")
    ) {
        return 1;

    } else {
        return 2;
    }
}

generarRuta = function(nombre) {

    if (nombre === 'piedra') {
        return "./imagenesPPT/piedra.png";

    } else if (nombre === 'papel') {
        return "./imagenesPPT/papel.png";

    } else if (nombre === 'tijera') {
        return "./imagenesPPT/tijera.png";
    }
}