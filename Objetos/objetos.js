window.onload = iniciar;

var personas = [];

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
}

function clickBtnAgregar() {
    var txtNombre = document.getElementById("txtNombre").value;
    var txtApellido = document.getElementById("txtApellido").value;
    var txtTelefono = document.getElementById("txtTelefono").value;
    var txtEmail = document.getElementById("txtEmail").value;
    var txtDireccion = document.getElementById("txtDireccion").value;

    var persona = {
        "nombre": txtNombre,
        "pellido": txtApellido,
        "telefono": txtTelefono,
        "email": txtEmail,
        "direccion": txtDireccion
    }

    personas.push(persona);
    mostrarPersonas();
}


function mostrarPersonas() {
    var listado = document.getElementById("listado");
    var html = "";
    for (var persona of personas) {

        html += `<br/>` + `Nombre: ${persona.nombre}` + ` ` + `Apellido: ${persona.pellido}` + ` ` + `Telefono: ${persona.telefono}` + ` ` + `Email: ${persona.email}` + ` ` + `Dirección: ${persona.direccion}`;
    }
    listado.innerHTML = html;
}