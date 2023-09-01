ejecucionPrueba1 = function() {

    let mensaje;

    mensaje = recuperarTexto("txtCadena");
    recorreCadena(mensaje);

}
recorreCadena = function(cadena) {

    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("caracter: " + caracter + " posicion= " + posicion);
    }
}



ejecucionPrueba2 = function() {

    let mensaje;

    mensaje = recuperarTexto("txtCadena");
    let respuesta = invertirCadena(mensaje);
    mostrarTexto("lblRespuesta", respuesta);

}
invertirCadena = function(cadena) {

    let caracter;
    let resultado = "";

    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado += caracter;
    }
    return resultado;
}

buscarLetra = function(cadena, letra) {

    let letraBuscada;
    let existeLetra = false;

    for (let l = 0; l < cadena.length; l++) {

        letraBuscada = cadena.charAt(l);
        if (letraBuscada === letra) {

            existeLetra = true;
        }
    }
    if (existeLetra === true) {
        return true;
    } else {
        return false;
    }
}

contarMayusculas = function(cadena) {

    let letra;
    let contarMayusculas;

    for (let m = 0; m < cadena.length; m++) {
        letra = cadena.charAt(m);
        if (esMayucula(letra)) {

            contarMayusculas++;
        }
    }
    console.log(contarMayusculas);
}