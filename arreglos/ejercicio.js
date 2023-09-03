let notas = [];


agregarElementos = function() {

    notas.push(2);
    notas.push(14);
    console.log(notas.length);

}

recorrerArreglo = function() {
    let notaR;
    for (let a = 0; a < notas.length; a++) {

        notaR = notas[a];
        console.log(notaR);
    }
}

probarAgregar = function() {

    let notaRecu;
    notaRecu = recuperarInt("txtNota");
    agergarNota(notaRecu);

}

agergarNota = function(nota) {

    notas.push(nota);
    mostrarNotas();

}
ejecutarPromedio = function() {

    let notaFinal = calcularPromedio();

    mostrarTexto("lblPromedio", notaFinal);

}
calcularPromedio = function() {

    let sumaNotas = 0;
    let promedio = 0;

    for (let n = 0; n < notas.length; n++) {

        sumaNotas += notas[n];

    }
    promedio = sumaNotas / notas.length;

    return promedio;
}

generaTabla = function() {

    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");

    contenidoTabla += "<table><tr> <td> UNO </td> </tr>" +
        "<tr> <td> DOS </td></table>";

    cmpTabla.innerHTML = contenidoTabla;

}

mostrarNotas = function() {

    let cmpTabla = document.getElementById("divTabla");
    let contenidoTable = "<table> <tr><th>NOTAS</th></tr>";

    for (let i = 0; i < notas.length; i++) {

        let miNota = notas[i];
        contenidoTable += "<tr> <td>";
        contenidoTable += miNota;
        contenidoTable += "</tr> </td>";
    }

    contenidoTable += "</table>";
    cmpTabla.innerHTML = contenidoTable;

}