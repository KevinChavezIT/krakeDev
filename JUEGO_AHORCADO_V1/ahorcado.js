//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let intentos = 0;
let palabraSecreta;
let coincidencias = 0;
let errores = 0;


mostrarAhorcado = function() {

    if (errores === 1) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_02.png");
    } else if (errores === 2) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_03.png");
    } else if (errores === 3) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_04.png");
    } else if (errores === 4) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_05.png");
    } else if (errores === 5) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_06.png");
    } else if (errores === 6) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_07.png");
    } else if (errores === 7) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_08.png");
    } else if (errores === 8) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_09.png");
    } else if (errores === 9) {
        mostrarImagen("ahorcadoImagen", "./imagenes/Ahorcado_10.png");
    }
}

ingresarLetra = function() {
    let letraIngresada = recuperarTexto("txtLetra");
    let letraValida = validar(letraIngresada);

    if (esMayuscula(letraIngresada)) {

        if (coincidencias === 5) {
            mostrarImagen("ahorcadoImagen", "./imagenes/ganador.gif");

        } else {
            intentos++;
            if (intentos === 10) {

                mostrarImagen("ahorcadoImagen", "./imagenes/gameOver.gif");
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
            coincidencias++;

        }
    }

    if (letrasEncontradas === 0) {

        alert("La letra '" + letra + "' no es parte de la palabra.");
        errores++;
        mostrarAhorcado();
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