//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

ingresarLetra = function() {
    let letraIngresada = recuperarTexto("txtLetra");

    if (esMayuscula(letraIngresada)) {

        validar(letraIngresada);

    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
}

validar = function(letra) {

    let letrasEncontradas = 0;

    for (let m = 0; m < palabraSecreta.length; m++) {

        if (letra === palabraSecreta.charAt(m)) {

            letrasEncontradas++;
            mostrarLetra(letra, m);
        }
    }
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