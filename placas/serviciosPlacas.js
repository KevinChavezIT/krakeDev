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
            validacion = true;
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