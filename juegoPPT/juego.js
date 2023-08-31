let puntosUsuario = 0;
let puntosPC = 0;

jugar = function(seleccionado) {

    let computador;
    let ganador;
    let rutaImgPC;

    computador = generarElemento();
    rutaImgPC = generarRuta(computador);
    mostrarImagen("imgComputador", rutaImgPC);

    ganador = determinarGanador(seleccionado, computador);

    if (ganador === 0) {
        mostrarTexto("lblResultado", "EMPATE");
    } else if (ganador === 1) {
        puntosUsuario++;
        mostrarTexto("lblResultado", "GANASTE PARTIDA");
        mostrarTexto("lblUsuario", "Usuario: " + puntosUsuario);

    } else if (ganador === 2) {
        puntosPC++;
        mostrarTexto("lblResultado", "PERDISTELA LA PARTIDA");
        mostrarTexto("lblPC", "Computador: " + puntosPC);
    }

}