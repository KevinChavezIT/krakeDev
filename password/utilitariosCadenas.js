esMayuscula = function(caracter) {

    caracter = caracter.charCodeAt(0);

    if (caracter >= 65 && caracter <= 90) {

        return true;

    } else {

        return false;
    }
}

esDigito = function(caracter) {

    caracter = caracter.charCodeAt(0);

    if (caracter >= 48 && caracter <= 57) {

        return true;

    } else {

        return false;
    }
}

esGuion = function(caracter) {

    caracter = caracter.charCodeAt(0);

    if (caracter == 45 || caracter == 95 || caracter == 42) {

        return true;

    } else {

        return false;
    }
}