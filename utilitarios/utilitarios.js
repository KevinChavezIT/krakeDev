mostrarTextoCaja = function(idCompnente, mensaje) {

    let componente;
    componente = document.getElementById(idCompnente);
    componente.value = mensaje;
}

mostrarImagen = function(idCompnente, rutaImagen) {

    let componente;
    componente = document.getElementById(idCompnente);
    componente.src = rutaImagen;

}

mostrarTexto = function(idCompnente, mensaje) {

    let componente;
    componente = document.getElementById(idCompnente);
    componente.innerText = mensaje;

}

recuperarTexto = function(idComponente) {
    let componente;
    let valorIngresado;

    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;

    return valorIngresado;
}

recuperarInt = function(idComponente) {

    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);

    return valorEntero;
}

recuperarFloat = function(idComponente) {

    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);

    return valorFloat;
}