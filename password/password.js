ejecutarValidacion = function() {

    let password = document.getElementById("txtPass").value;
    let erroresEstructura = validarPassword(password);

    if (erroresEstructura === "") {

        lblValidacion.innerText = "PASSWORD CORRECTO ";
        document.getElementById("lblErrores").innerText = "";
    } else {

        document.getElementById("lblErrores").innerHTML = erroresEstructura;
    }
}

validarPassword = function(password) {


    let mensaje = " ";

    if (password.length >= 8 && password.length <= 16) {
        let validacion1 = false;
        let validacion2 = false;
        let validacion3 = false;

        for (let m = 0; m < password.length; m++) {
            let letra = password.charAt(m);

            if (esMayuscula(letra)) {
                validacion1 = true;

            }
            if (esDigito(letra)) {
                validacion2 = true;

            }
            if (esGuion(letra)) {
                validacion3 = true;

            }
        }

        if (!validacion1) {
            mensaje += "El password contiene al menos una letra mayúscula.<br>";
        }

        if (!validacion2) {
            mensaje += "El password contiene al menos un número.<br>";
        }

        if (!validacion3) {
            mensaje += "El password contiene al menos un caracter especial (*, - , _).<br>";
        }
        if (validacion1 && validacion2 && validacion3) {
            return "";

        } else {
            return mensaje;
        }
    } else {
        return "La longitud del password es de 8 a 16 caracteres <br> ";
    }
}

limpiar = function() {

    document.getElementById("txtPass").value = "";
    document.getElementById("lblValidacion").innerText = "";
    document.getElementById("lblErrores").innerHTML = "";
}