//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
esMayuscula = function(caracter) {

    caracter = caracter.charCodeAt(0);

    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
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
            console.log(palabraSecreta);

        } else {
            alert(" SOLO LETRAS MAYUSCULAS");
        }

    } else {
        alert("DEBE INGRESAR 5 LETRAS TODAS MAYUSCULAS");
    }
}