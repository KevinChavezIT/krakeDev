let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1758300089", nombre: "Kevin", apellido: "Chavez", sueldo: 1000.0 }
]

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