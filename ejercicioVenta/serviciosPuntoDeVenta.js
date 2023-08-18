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