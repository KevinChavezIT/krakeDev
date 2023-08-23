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

    if (resultFormateado < 5 && resultFormateado > 0) {

        cambiarImagen("imgPromedio", "./imagenesPromedio/reprobado.gif");
        cambiarTexto("lblResultado", "REPROBADO");

    } else if (resultFormateado >= 5 && resultFormateado <= 8) {

        cambiarImagen("imgPromedio", "./imagenesPromedio/maso.gif");
        cambiarTexto("lblResultado", "BUEN TRABAJO");

    } else if (resultFormateado > 8 && resultFormateado <= 10) {

        cambiarImagen("imgPromedio", "./imagenesPromedio/excelente.gif");
        cambiarTexto("lblResultado", "BUEN EXCELENTE");
    } else {
        cambiarImagen("imgPromedio", "./imagenesPromedio/incorrecto.gif");
        cambiarTexto("lblResultado", "DATOS INCORRECTOS");
    }

}