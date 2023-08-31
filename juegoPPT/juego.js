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
        if (puntosUsuario === 5) {
            mostrarTexto("lblPartida", "HAS GANADO EL JUEGO");
        }

    } else if (ganador === 2) {
        puntosPC++;
        mostrarTexto("lblResultado", "PERDISTELA LA PARTIDA");
        mostrarTexto("lblPC", "Computador: " + puntosPC);
        if (puntosPC === 5) {
            mostrarTexto("lblPartida", "HAS PERDIDO EL JUEGO");
        }
    }

    limpiar = function() {
        puntosUsuario = 0;
        puntosPC = 0;
        document.getElementById("imgComputador").src = "";
        document.getElementById("lblResultado").innerText = "";
        document.getElementById("lblUsuario").innerText = "Usuario:";
        document.getElementById("lblPC").innerText = "Computador:";
        document.getElementById("lblPartida").innerText = "";
    }
}