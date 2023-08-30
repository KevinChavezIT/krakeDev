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
         mostrarTexto("lblResultado", "GANASTE PARTIDA");
     } else if (ganador === 2) {
         mostrarTexto("lblResultado", "PERDISTELA LA PARTIDA");
     }
 }