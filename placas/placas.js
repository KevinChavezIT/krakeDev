validarPlaca = function() {

    let placa = document.getElementById("txtPlaca").value;
    let erroresEstructura = validarEstructura(placa);
    let provincia = obtenerProvincia(placa);
    let tipoVehiculo = obtenerTipoVehiculo(placa);
    let picoPlaca = obtenerDiaPicoYPlaca(placa);

    if (erroresEstructura === null) {
        lblValidacion.innerText = "ESTRUCTURA VALIDA";
        document.getElementById("lblErrores").innerText = "";

        if (provincia != null) {
            document.getElementById("lblProvincia").innerText = "PROVINCIA: " + provincia;
        } else {
            document.getElementById("lblProvincia").innerText = "PROVINCIA INCORRECTA";
        }

        if (tipoVehiculo != null) {
            document.getElementById("lblTipoVehiculo").innerText = "TIPO DE VEHICULO: " + tipoVehiculo;
        } else {
            document.getElementById("lblTipoVehiculo").innerText = "VEHICULO INCORRECTO";
        }

        if (picoPlaca) {
            document.getElementById("lblPicoYPlaca").innerText = "PICO Y PLACA DIAS: " + picoPlaca;
        }

    } else {
        document.getElementById("lblErrores").innerHTML = erroresEstructura;
        lblValidacion.innerText = "ESTRUCTURA INCORRECTA";
    }
}

limpiar = function() {

    document.getElementById("txtPlaca").value = "";
    document.getElementById("lblProvincia").innerText = "";
    document.getElementById("lblTipoVehiculo").innerText = "";
    document.getElementById("lblPicoYPlaca").innerText = "";
    document.getElementById("lblValidacion").innerText = "";
    document.getElementById("lblErrores").innerHTML = "";
}