saludar = function() {
    let apellido;
    let nombre;
    nombre = recuperarTexto("txtName");
    apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");

    let mensaje = "Bienvenido: " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensaje);
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