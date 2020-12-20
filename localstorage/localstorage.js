window.onload = iniciar;

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

    var btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);

    mostrarNotas();
}

function clickBtnAgregar() {
    var txtNota = document.getElementById("txtNota").value;

    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }

    notas.push(txtNota);
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();
}


function mostrarNotas() {
    var divNotas = document.getElementById("divNotas");

    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }

    var html = "";
    for (var nota of notas) {
        html += nota + "<br/>"
    }

    divNotas.innerHTML = html;
}


function clickBtnBorrar() {
    localStorage.clear();
    mostrarNotas();
}