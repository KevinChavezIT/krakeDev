let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1758300089", nombre: "Kevin", apellido: "Chavez", sueldo: 1000.0 }
]

ejecutarBusqueda = function() {

    let valorCedula = recuperarTexto("txtBusquedaCedula");

    let empleadoBuscado = buscarEmpleado(valorCedula);

    if (empleadoBuscado === null) {
        alert("NO EXISTE EMPLEADO");

    } else {
        mostrarTextoEnCaja("txtCedula", empleadoBuscado.cedula);
        deshabilitarComponente("txtCedula");
        mostrarTextoEnCaja("txtNombre", empleadoBuscado.nombre);
        habilitarComponente("txtNombre");
        mostrarTextoEnCaja("txtApellido", empleadoBuscado.apellido);
        habilitarComponente("txtApellido");
        mostrarTextoEnCaja("txtSueldo", empleadoBuscado.sueldo);
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }
}

guardar = function() {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    let validacionExitosa = true;

    if (valorCedula.length !== 10 || !esDigito(valorCedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 digitos y contener solo numeros");
        validacionExitosa = false;
    } else {
        mostrarTexto("lblErrorCedula", "");
    }

    if (valorNombre.length < 3 || !esMayuscula(valorNombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 letras y todas deben ser mayusculas");
        validacionExitosa = false;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }

    if (valorApellido.length < 3 || !esMayuscula(valorApellido)) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 letras y todas deben ser mayusculas");
        validacionExitosa = false;
    } else {
        mostrarTexto("lblErrorApellido", "");
    }

    if (isNaN(valorSueldo) || valorSueldo < 400 || valorSueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un numero valido y estar en el rango permitido de 400 a 5000");
        validacionExitosa = false;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }

    if (validacionExitosa) {

        esNuevo = true;
        if (esNuevo) {

            let empleado = {};
            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;

            let empleadoAgregado = agregarEmpleado(empleado);

            if (empleadoAgregado) {

                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitar();
                esNuevo = false;
            } else {
                let empleadoModificar = buscarEmpleado(valorCedula);

                if (empleadoModificar != null) {
                    empleadoModificar.nombre = valorNombre;
                    empleadoModificar.apellido = valorApellido;
                    empleadoModificar.sueldo = valorSueldo;

                    alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                    mostrarEmpleados();
                    deshabilitar();

                }
            }

        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + empleado.cedula);
        }
    }
}

agregarEmpleado = function(empleado) {

    let resultado;

    resultado = buscarEmpleado(empleado.cedula);

    if (resultado === null) {
        empleados.push(empleado);
        return true;

    } else {
        return false;
    }
}

buscarEmpleado = function(cedula) {

    let elementCliente;
    let clienteEncontrado = null;

    for (let e = 0; e < empleados.length; e++) {

        elementCliente = empleados[e];
        if (elementCliente.cedula === cedula) {

            clienteEncontrado = elementCliente;
            break;
        }
    }
    return clienteEncontrado;
}

ejecutarNuevo = function() {

    esNuevo = true;
    habilitarComponente("txtCedula");
    mostrarTextoEnCaja("txtCedula", "")
    habilitarComponente("txtNombre");
    mostrarTextoEnCaja("txtNombre", "")
    habilitarComponente("txtApellido");
    mostrarTextoEnCaja("txtApellido", "")
    habilitarComponente("txtSueldo");
    mostrarTextoEnCaja("txtSueldo", "")
    habilitarComponente("btnGuardar");
    deshabilitarComponente("txtBusquedaCedula", "");
}

mostrarEmpleados = function() {

    let cmpTabla = document.getElementById("tablaEmpleados");

    let contenidoTablaEm = "<table> <tr> " +
        "<th>CEDULA </th>" +
        "<th>NOMBRE </th>" +
        "<th>APELLIDO </th>" +
        "<th>SUELDO </th>" +
        "</tr>";


    let elementEmpleados;

    for (let e = 0; e < empleados.length; e++) {

        elementEmpleados = empleados[e];
        contenidoTablaEm +=
            "<tr> <td> " + elementEmpleados.cedula + " </td>" +
            "<td> " + elementEmpleados.nombre + " </td>" +
            "<td> " + elementEmpleados.apellido + " </td>" +
            "<td> " + elementEmpleados.sueldo + " </td>" +
            "  </tr>"
    }

    contenidoTablaEm += "</table>"
    cmpTabla.innerHTML = contenidoTablaEm;
}

mostrarOpcionEmpleado = function() {

    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitar();
}
mostrarOpcionRol = function() {

    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");

}
mostrarOpcionResumen = function() {

    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");

}

deshabilitar = function() {

    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}