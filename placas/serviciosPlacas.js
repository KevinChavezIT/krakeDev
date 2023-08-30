validarEstructura = function(placa) {

    let validacion = true;
    longitud = placa.length;

    primerCaracter = placa.charAt(0);
    segundoCaracter = placa.charAt(1);
    tercerCaracter = placa.charAt(2);
    cuartoCaracter = placa.charAt(3);
    quintoCaracter = placa.charAt(4);
    sextoCaracter = placa.charAt(5);
    septimoCaracter = placa.charAt(6);
    octavoCaracter = placa.charAt(7);

    let mensajeError = " ";

    if (longitud == 7 || longitud == 8) {

        if (!esMayuscula(primerCaracter)) {
            validacion = false;
            mensajeError += "El primer caracter debe ser una MAYUSCULA<br> ";
        }
        if (!esMayuscula(segundoCaracter)) {
            validacion = false;
            mensajeError += "\n El segundo caracter debe ser una MAYUSCULA <br> ";
        }
        if (!esMayuscula(tercerCaracter)) {
            validacion = false;
            mensajeError += "El tercer caracter debe ser una MAYUSCULA <br> ";
        }
        if (!esGuion(cuartoCaracter)) {
            validacion = false;
            mensajeError += "El cuarto caracter debe ser un GUION <br> ";
        }
        if (!esDigito(quintoCaracter)) {
            validacion = false;
            mensajeError += "El quinto caracter debe ser un DIGITO <br> ";
        }
        if (!esDigito(sextoCaracter)) {
            validacion = false;
            mensajeError += "El sexto caracter debe ser un DIGITO <br> ";
        }
        if (!esDigito(septimoCaracter)) {
            validacion = false;
            mensajeError += "El septimo caracter debe ser un DIGITO <br> ";
        }
        if (longitud === 8 && !esDigito(octavoCaracter)) {
            validacion = false;
            mensajeError += "El octavo caracter debe ser un DIGITO <br>";
        }
        if (validacion) {
            return null;

        } else
            return mensajeError;

    } else {
        return mensajeError += "La longitud de la placa debe tener 7 u 8 CARACTERES <br> ";
    }
}


obtenerProvincia = function(placaVehiculo) {

    primerCaracter = placaVehiculo.charAt(0);

    if (primerCaracter === 'A') {
        return "AZUAY ";

    } else if (primerCaracter === 'B') {
        return "BOLIVAR";

    } else if (primerCaracter === 'U') {
        return "CANIAR";

    } else if (primerCaracter === 'C') {
        return "CARCHI";

    } else if (primerCaracter === 'X') {
        return "COTOPAXI";

    } else if (primerCaracter === 'H') {
        return "CHIMBORAZO";

    } else if (primerCaracter === 'O') {
        return "EL ORO";

    } else if (primerCaracter === 'E') {
        return "ESMERALDAS";

    } else if (primerCaracter === 'W') {
        return "GALAPAGOS";

    } else if (primerCaracter === 'G') {
        return "GUAYAS";

    } else if (primerCaracter === 'I') {
        return "IMBABURA";

    } else if (primerCaracter === 'L') {
        return "LOJA";

    } else if (primerCaracter === 'R') {
        return "LOS RIOS";

    } else if (primerCaracter === 'M') {
        return "MANABI";

    } else if (primerCaracter === 'V') {
        return "MORONA SANTIAGO";

    } else if (primerCaracter === 'N') {
        return "NAPO";

    } else if (primerCaracter === 'S') {
        return "PASTAZA";

    } else if (primerCaracter === 'P') {
        return "PICHINCHA";

    } else if (primerCaracter === 'K') {
        return "SUCUMBIOS";

    } else if (primerCaracter === 'Q') {
        return "ORELLANA";

    } else if (primerCaracter === 'T') {
        return "TUNGURAHUA";

    } else if (primerCaracter === 'Z') {
        return "ZAMORA CHINCHIPE";

    } else if (primerCaracter === 'Y') {
        return "SANTA ELENA";

    } else if (primerCaracter === 'J') {
        return "SANTO DOMINGO DE LOS TSACHILAS";

    } else {
        return null;
    }
}


obtenerTipoVehiculo = function(placa) {

    segundoCaracter = placa.charAt(1);
    vehiculoPrivado = "DBCFGHIJKLNOPQRTUVWY";

    if (segundoCaracter === 'A' || segundoCaracter === 'Z') {
        return "Vehiculo Comercial";

    } else if (segundoCaracter === 'E') {
        return "Vehiculo Gubernamental";

    } else if (segundoCaracter === 'X') {
        return "Vehiculo de uso Oficial";

    } else if (segundoCaracter === 'S') {
        return "Vehiculo del Gobierno Provincial";

    } else if (segundoCaracter === 'M') {
        return "Vehiculo Municipal";

    } else if (vehiculoPrivado.includes(segundoCaracter)) {
        return "Vehiculo Particular(PRIVADO)";

    } else {
        return null;
    }

}