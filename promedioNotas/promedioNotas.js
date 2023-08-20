calcularPromedioNotas = function() {

    let notaUno;
    let notaDos;
    let notaTres;
    let promedio;
    let resultFormateado;

    notaUno = recuperarFlotante("txtNum1");
    notaDos = recuperarFlotante("txtNum2");
    notaTres = recuperarFlotante("txtNum3");

    promedio = calcularPromedio(notaUno, notaDos, notaTres);
    resultFormateado = promedio.toFixed(2);
    cambiarTexto("lblPromedio", resultFormateado + " Promedio Final");

}