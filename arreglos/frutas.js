let frutas = ["pera", "manzana", "naranja"];

probarBusqueda = function() {

    let frutaIngresada = recuperarTexto("txtFruta");
    let respuesta = buscar(frutaIngresada);
    if (respuesta === null) {
        alert("no existe fruta");
    } else {
        alert(frutaIngresada + " Existe en el cesto");
    }

}

buscar = function(fruta) {
    let frutaEncontrada = null;
    let element;
    for (let i = 0; i < frutas.length; i++) {


        element = frutas[i];
        if (fruta === element) {
            frutaEncontrada = element;

            break;
        }

    }
    return frutaEncontrada;
}