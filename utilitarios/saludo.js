saludar = function() {
    let apellido;
    let nombre;
    nombre = recuperarTexto("txtName");
    apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");

    let mensaje = "Bienvenido: " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensaje);

    let imagen = mostrarImagen("imagenSaludo", "./imagenes/saludo.gif");

    mostrarTextoCaja("txtName", " ");

}