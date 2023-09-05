incrementarSaldo = function(cuenta, monto) {

    cuenta.saldo += monto;
}

probarIncremntoSaldo = function() {

    let cuentaa = { numero: "1567", saldo: 34.0 };

    incrementarSaldo(cuentaa, 100);
    console.log(cuentaa.saldo);

}

probarDeterminarMayor = function() {

    let per1 = { nombre: "JUAN", edad: "15" };
    let per2 = { nombre: "PEPE", edad: "10" };

    let mayor;
    mayor = determinarMayor(per1, per2);

    if (mayor != null) {
        console.log("el mayor es: " + mayor.nombre);
    }


}

determinarMayor = function(persona1, persona2) {

    if (persona1.edad > persona2.edad) {

        return persona1;
    } else if (persona2.edad > persona1.edad) {

        return persona2;
    } else {
        return null;
    }

}

crearCliente = function() {

    let cliente = {

        cedula: "123456789",
        nombre: "pepe"
    }
    let cliente2 = {}
    cliente2.nombre = "JUAN";
    cliente2.apellido = "007";

}

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

modificarAtributos = function() {

    let cuenta = {

        numero: "5323423423",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 100;
    console.log(cuenta.saldo);


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