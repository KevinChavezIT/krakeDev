calcularValorTotal = function() {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
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

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function() {
        /*
            Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
            Dejar todos los textos de los montos con el valor 0.0
            Si funciona, hacer un commit
         */
    }
    /* SI TODO FUNCIONA, HACER UN PUSH */