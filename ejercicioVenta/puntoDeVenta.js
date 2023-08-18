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
    document.getElementById("lblSubtotal").innerText = "$ " + valorSubtotal;


    valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    document.getElementById("lblDescuento").innerText = "$ " + valorDescuento;


    valorIVA = calcularIva(valorSubtotal, valorDescuento);
    document.getElementById("lblValorIVA").innerText = "$ " + valorIVA;


    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    document.getElementById("lblTotal").innerText = "$ " + valorTotal;


    document.getElementById("lblResumen").innerHTML = "Resumen de compra: " + "Valor a pagar por " + cantidad + " " + nombreProducto +
        " con el " + porcentajeDescuento + "% de Descuento es de: USD " + valorTotal;

}
limpiar = function() {

    document.getElementById("txtProducto").value = " ";
    document.getElementById("txtPrecio").value = "0.0";
    document.getElementById("txtCantidad").value = "0";
    document.getElementById("txtPorcentajeDescuento").value = "0";
    document.getElementById("lblSubtotal").innerText = "0.0";
    document.getElementById("lblDescuento").innerText = "0.0";
    document.getElementById("lblValorIVA").innerText = "0.0";
    document.getElementById("lblTotal").innerText = "0.0";
    document.getElementById("lblResumen").innerText = "Resumen de compra: ";

}