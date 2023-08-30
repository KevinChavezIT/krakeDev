validarPlaca = function() {

    let erroresEstructura;
    let placa;
    let provincia;

    placa = document.getElementById("txtPlaca").value;

    erroresEstructura = validarEstructura(placa);
    provincia = obtenerProvincia(placa);

    if (erroresEstructura === null) {
        lblValidacion.innerText = ("ESTRUCTURA VALIDA");
        document.getElementById("lblErrores").innerText = "";
    } else {
        document.getElementById("lblErrores").innerHTML = erroresEstructura;
        lblValidacion.innerText = ("ESTRUCTURA INCORRECTA");
    }

    if (provincia != null) {
        document.getElementById("lblProvincia").innerText = provincia;
    } else {
        document.getElementById("lblProvincia").innerText = ("PROVINCIA INCORRECTA");
    }
}