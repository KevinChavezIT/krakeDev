//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let intentos = 0;
let palabraSecreta;
let coincidencias = 0;
let errores = 0;

ingresarLetra = function() {
    let letraIngresada = recuperarTexto("txtLetra");

    if (esMayuscula(letraIngresada)) {
        let letraValida = validar(letraIngresada);
        if (letraValida) {
            coincidencias++;

            if (coincidencias === 5) {
                alert("HAS GANADO");
            }

        } else {
            intentos++;
            if (intentos === 10) {

                alert("HAS PERDIDO");
            }
        }
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}


validar = function(letra) {

    let letrasEncontradas = 0;

    for (let m = 0; m < palabraSecreta.length; m++) {

        if (letra === palabraSecreta.charAt(m)) {

            letrasEncontradas++;
            mostrarLetra(letra, m);
            return true;
        }
    }

    errores++;
    alert("La letra '" + letra + "' no es parte de la palabra.");

}

mostrarLetra = function(letra, posicion) {
    mostrarTexto("div" + posicion, letra);
}

guardarPalabra = function() {

    let palabra = recuperarTexto("txtSecreta");

    if (palabra.length === 5) {

        let allMayusculas = true;

        for (let s = 0; s < palabra.length; s++) {

            if (!esMayuscula(palabra.charAt(s))) {

                allMayusculas = false;
            }
        }

        if (allMayusculas) {
            palabraSecreta = palabra;
            alert(" LISTO");

        } else {
            alert(" SOLO LETRAS MAYUSCULAS");
        }

    } else {
        alert("DEBE INGRESAR 5 LETRAS TODAS MAYUSCULAS");
    }
}

esMayuscula = function(caracter) {

    caracter = caracter.charCodeAt(0);

    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
}