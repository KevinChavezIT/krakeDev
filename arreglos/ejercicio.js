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