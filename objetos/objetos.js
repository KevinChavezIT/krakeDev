probarAtributos = function() {

    let persona = {

        nombre: "PEPE",
        apellido: "MARIO",
        edad: 15,
        estaVivo: true

    }
    console.log(persona.apellido + " tiene: " + persona.edad + " anios");

    if (persona.estaVivo === false) {
        console.log("Esta morido");
    } else {
        console.log("Esta Vivo");
    }
}


crearProducto = function() {

    let producto1 = {

        nombreP: "mouses",
        precio: 10.5,
        stock: 10,
    }

    let producto2 = {

        nombreP: "teclados",
        precio: 20.5,
        stock: 10,
    }
    console.log("Producto: " + producto1.nombreP);
    console.log("Precio: " + producto2.precio);

    if (producto2.stock > producto1.stock) {
        console.log("Hay un stock de: " + producto2.stock + " " + producto2.nombreP);

    } else if (producto1.stock > producto2.stock) {
        console.log("Hay un stock de: " + producto1.stock + " " + producto1.nombreP);

    } else if (producto1.stock === producto2.stock) {
        console.log("Hay un stock igual de: " + producto1.stock + " " + producto1.nombreP +
            " y " + producto2.stock + " " + producto2.nombreP);
    }
}