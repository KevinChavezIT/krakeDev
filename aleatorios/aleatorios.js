numAleatorio = function() {

    let numeroA;

    numeroA = Math.floor(Math.random() * 100) + 1;

    return numeroA;

}

generarAleatorios = function() {

    let aleatorios = [];

    let numero = recuperarInt("txtNumero");

    if (numero >= 5 && numero <= 20) {

        for (let n = 0; n < numero; n++) {

            let num = numAleatorio();
            aleatorios.push(num);

        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function(arregloNumeros) {

    let cmpTabla = document.getElementById("divTabla");
    let contenidoTable = "<table> <tr><th>NUMEROS</th></tr>";

    for (let n = 0; n < arregloNumeros.length; n++) {

        let numeros = arregloNumeros[n];
        contenidoTable += "<tr> <td>";
        contenidoTable += numeros;
        contenidoTable += "</tr> </td>";
    }
    contenidoTable += "</table>";
    cmpTabla.innerHTML = contenidoTable;

}