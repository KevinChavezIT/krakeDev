calcularSubtotal = function(precio, cantidad) {

    let pagoSubtotal;
    pagoSubtotal = precio * cantidad;

    return pagoSubtotal;

}

calcularDescuentoPorVolumen = function(subTotal, cantidad) {

    let descuento;

    if (cantidad < 3) {

        descuento = 0;
    }

    if (cantidad >= 3 && cantidad <= 5) {

        descuento = (subTotal * 3) / 100;

    } else if (cantidad >= 6 && cantidad <= 11) {

        descuento = (subTotal * 4) / 100;

    } else if (cantidad >= 12) {

        descuento = (subTotal * 5) / 100;
    }

    return descuento;
}

calcularIva = function(subTotal, descuento) {

    let iva;
    iva = (subTotal - descuento) * 0.12;

    return iva;

}

calcularTotal = function(subTotal, descuento, iva) {

    let total;
    total = (subTotal - descuento) + iva;

    return total;

}