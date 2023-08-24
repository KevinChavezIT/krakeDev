calcularTasaInteres = function(ingresoAnual) {

    ingresoAnual = parseFloat(ingresoAnual);

    let tasaInteres;

    if (ingresoAnual < 300000) {

        tasaInteres = (ingresoAnual * 16) / 100;

    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {

        tasaInteres = (ingresoAnual * 15) / 100;

    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {

        tasaInteres = (ingresoAnual * 14) / 100;

    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {

        tasaInteres = (ingresoAnual * 13) / 100;

    } else if (ingresoAnual >= 2000000) {

        tasaInteres = (ingresoAnual * 12) / 100;
    }

    return tasaInteres;
}



calcularCapacidadPago = function(edad, ingresos, egresos) {

    edad = parseInt(edad);
    ingresos = parseFloat(ingresos);
    egresos = parseFloat(egresos);

    let cantidadSobrante;
    let cuotaMensual;

    if (edad > 50) {
        cantidadSobrante = ingresos - egresos;
        cuotaMensual = (30 / 100) * 160;

    } else if (edad >= 0 && edad <= 50) {
        cantidadSobrante = ingresos - egresos;
        cuotaMensual = (40 / 100) * 160;
    }

    return cuotaMensual;
}



calcularDescuento = function(precio, cantidad) {

    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);

    let precioFinal;
    let descuento;
    let subtotal;

    if (cantidad < 3) {
        ("no hay descuento");

    } else if (cantidad >= 3 && cantidad <= 5) {

        subtotal = precio * cantidad;
        descuento = (subtotal * 2) / 100;
        precioFinal = subtotal - descuento;

    } else if (cantidad >= 6 && cantidad <= 11) {

        subtotal = precio * cantidad;
        descuento = (subtotal * 3) / 100;
        precioFinal = subtotal - descuento;

    } else if (cantidad >= 12) {

        subtotal = precio * cantidad;
        descuento = (subtotal * 4) / 100;
        precioFinal = subtotal - descuento;
    }

    return precioFinal;
}



determinarColesterolLDL = function(nivelColesterol) {

    nivelColesterol = parseFloat(nivelColesterol);

    nivelColesterol = nivelColesterol.toString();

    let nota;

    if (nivelColesterol < 100) {

        nota = "Óptimo ( lo mejor para su salud ) " + nivelColesterol;

    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {

        nota = " Casi óptimo  " + nivelColesterol;

    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {

        nota = " Límite superior del rango normal  " + nivelColesterol;

    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {

        nota = " Alto  " + nivelColesterol;

    } else if (nivelColesterol >= 190) {

        nota = " Muy alto  " + nivelColesterol;
    }

    return nota;
}



validarClave = function(clave) {

    clave = clave.toString();

    if (clave >= 8 && clave <= 16) {

        return true;

    } else {

        return false;
    }
}



esMayuscula = function(caracter) {

    caracter = caracter.toString();

    if (caracter >= 65 && caracter <= 90) {

        return true;

    } else {

        return false;
    }
}



esMinuscula = function(caracter) {

    caracter = caracter.toString();

    if (caracter >= 97 && caracter <= 122 || caracter >= 160 && caracter <= 164) {

        return true;

    } else {

        return false;
    }
}



esDigito = function(caracter) {

    caracter = caracter.toString();

    if (caracter >= 48 && caracter <= 57) {

        return true;

    } else {

        return false;
    }
}



darPermiso = function(notaMate, notaFisica, notaGeometria) {

    notaMate = parseFloat(notaMate);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);

    if (notaMate > 90 || notaFisica > 90 || notaGeometria > 90) {

        return true;

    } else {

        return false;
    }
}

/*
al mometo de colocar en una mis inttuccion solo va a ingresar a Or
(solo va arealizar esta consulta notaMate > 90 || notaFisica > 90)

lo puesdes realizar con un if anidado o de la siguente manera 
if((fisica>noota||Matematicas>90) &&geometria)
*/
otorgarPermiso = function(notaMate, notaFisica, notaGeometria) {

    notaMate = parseFloat(notaMate);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);

    if ((notaMate > 90 || notaFisica > 90) && notaGeometria > 80) {

        return true;

    } else {

        return false;
    }
}


/*
solo realiza ve la nota de geometria.
realiza un if anidado ocomo el ejemplo anterior
*/
dejarSalir = function(notaMate, notaFisica, notaGeometria) {

    notaMate = parseFloat(notaMate);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);

    if ((notaMate > 90 && notaFisica > 90) || notaGeometria > 90) {
        return true;

    } else if (notaFisica > notaMate) {

        return true;

    } else {

        return false;
    }
}
