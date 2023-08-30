validarPlaca = function() {

    let erroresEstructura;
    let placa;

    placa = document.getElementById("txtPlaca").value;

    erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        alert("ESTRUCTURA VALIDA");
        document.getElementById("lblErrores").innerText = "";
    } else {
        document.getElementById("lblErrores").innerHTML = erroresEstructura;
        alert("ESTRUCTURA INCORRECTA");
    }
}