validarPlaca = function() {

    let placa = document.getElementById("txtPlaca").value;
    let erroresEstructura = validarEstructura(placa);
    let provincia = obtenerProvincia(placa);
    let tipoVehiculo = obtenerTipoVehiculo(placa);

    if (erroresEstructura === null) {
        lblValidacion.innerText = "ESTRUCTURA VALIDA";
        document.getElementById("lblErrores").innerText = "";

        if (provincia != null) {
            document.getElementById("lblProvincia").innerText = provincia;
        } else {
            document.getElementById("lblProvincia").innerText = "PROVINCIA INCORRECTA";
        }

        if (tipoVehiculo != null) {
            document.getElementById("lblTipoVehiculo").innerText = tipoVehiculo;
        } else {
            document.getElementById("lblTipoVehiculo").innerText = "VEHICULO INCORRECTO";
        }


    } else {
        document.getElementById("lblErrores").innerHTML = erroresEstructura;
        lblValidacion.innerText = "ESTRUCTURA INCORRECTA";
    }
}