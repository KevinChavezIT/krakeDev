let clientes = [
    { cedula: "123456", nombre: "MARIO", edad: 10 },
    { cedula: "987654", nombre: "LUIGI", edad: 20 },
    { cedula: "000001", nombre: "KONG", edad: 30 }
];

guardarCambios = function() {

    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarFloat("txtEdad");

    let clienteModificado = {};
    clienteModificado.cedula = valorCedula;
    clienteModificado.nombre = valorNombre;
    clienteModificado.edad = valorEdad;


    modificarCliente(clienteModificado);
    mostrarClients();


}

modificarCliente = function(cliente) {

    let clienteModificar = buscarCliente(cliente.cedula);

    if (clienteModificar != null) {

        clienteModificar.nombre = cliente.nombre;
        clienteModificar.edad = cliente.edad;

    }
}



busquedaCliente = function() {

    let valorCedula = recuperarTexto("txtBuscarCedula");

    let cliente = buscarCliente(valorCedula);

    if (cliente === null) {
        alert("cliente no encontrado");

    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }

}

crearCliente = function() {

    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente = function(cliente) {

    let resultado;

    resultado = buscarCliente(cliente.cedula);

    if (resultado === null) {
        clientes.push(cliente);
        alert("cliente agregado")
        mostrarClients();

    } else {
        alert("ya exite un cliente con la cedula: " + cliente.cedula);
    }
}

buscarCliente = function(cedula) {

    let elementCliente;
    let clienteEncontrado = null;

    for (let i = 0; i < clientes.length; i++) {

        elementCliente = clientes[i];
        if (elementCliente.cedula === cedula) {

            clienteEncontrado = elementCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClients = function() {

    let cmpTabla = document.getElementById("tablaClientes");

    let contenidoTabla = "<table> <tr> " +
        "<th>CEDULA </th>" +
        "<th>NOMBRE </th>" +
        "<th>EDAD </th>" +
        "</tr>";

    let elementClientes;

    for (let c = 0; c < clientes.length; c++) {

        elementClientes = clientes[c];
        contenidoTabla +=
            "<tr> <td> " + elementClientes.cedula + " </td>" +
            "<td> " + elementClientes.nombre + " </td>" +
            "<td> " + elementClientes.edad + " </td>" +
            "  </tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}