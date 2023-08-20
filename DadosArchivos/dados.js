jugar = function() {

    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);

    if (aleatorio > 3) {

        cambiarTexto("lblResultado", " Tu numero es mayor a 3 GANASTE ");

    } else {

        cambiarTexto("lblResultado", " Tu numero es menor a 3 PERDISTE ");
    }
}

lanzarDado = function() {

    let aleatorio;
    let numeroMulti;
    let numEnetero;
    let valorDado;

    aleatorio = Math.random();
    numeroMulti = aleatorio * 6;

    numEnetero = parseInt(numeroMulti);
    valorDado = numEnetero + 1;

    return valorDado;
}