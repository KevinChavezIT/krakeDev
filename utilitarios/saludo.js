saludar = function() {
    let apellido;
    let nombre;
    nombre = recuperarTexto("txtName");
    apellido = recuperarTexto("txtApellido");

}

recuperarTexto = function(idComponente) {
    let componente;
    let valorIngresado;

    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;

    return valorIngresado;
}