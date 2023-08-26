calcularValorTotal = function() {

    let nombreProducto;
    let precioProducto;
    let cantidad;

    let valorSubtotal;
    let valorDescuentoVolumen;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto("txtProducto");
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");

    if (esProductoValido(nombreProducto, "lblError1") &
        esCantidadValida(cantidad, "lblError2") &
        esPrecioValido(precioProducto, "lblError3")) {

        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);

        valorDescuentoVolumen = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuentoVolumen);

        valorIVA = calcularIva(valorSubtotal, valorDescuentoVolumen);
        mostrarTexto("lblValorIVA", valorIVA);

        valorTotal = calcularTotal(valorSubtotal, valorDescuentoVolumen, valorIVA);
        mostrarTexto("lblTotal", valorTotal);

    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }

}


esProductoValido = function(producto, idComponenteError) {

    let hayErrores = false;

    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (producto.length > 10) {
        mostrarTexto(idComponenteError,
            "El nombre debe contener hasta 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, " ")
    }

    return !hayErrores;
}

esCantidadValida = function(cantidad, idComponenteError) {

    let hayErrores = false;

    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "La cantidad permitida es entre 0 - 100")
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, " ")
    }
    return !hayErrores;
}

esPrecioValido = function(precio, idComponenteError) {

    let hayErrores = false;

    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "El precio debe ser entre 0 - 50")
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, " ")
    }
    return !hayErrores;
}

limpiar = function() {

    mostrarTextoEnCaja("txtProducto", " ");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");

}