calcularSubtotal = function(precio, cantidad) {

    let pagoSubtotal;
    pagoSubtotal = precio * cantidad;

    return pagoSubtotal;

}

calcularValorDescuento = function(monto, porcentajeDescuento) {

    let descuento;
    descuento = (monto * porcentajeDescuento) / 100

    return descuento;

}

calcularIva = function(monto, descuento) {

    let iva;
    iva = (monto - descuento) * 0.12;

    return iva;

}