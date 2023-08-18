calcularValorTotal = function() {

    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto("txtProducto");

    precioProducto = recuperarFloat("txtPrecio");

    cantidad = recuperarInt("txtCantidad");

    porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");


    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);


    valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento);


    valorIVA = calcularIva(valorSubtotal, valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA);


    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal);


    let resumen = "Resumen de compra: " + "Valor a pagar por " + cantidad + " " + nombreProducto +
        " con el " + porcentajeDescuento + "% de Descuento es de: USD " + valorTotal;
    mostrarTexto("lblResumen", resumen);

}
limpiar = function() {

    mostrarTextoEnCaja("txtProducto", " ");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "Resumen de compra: ");

}