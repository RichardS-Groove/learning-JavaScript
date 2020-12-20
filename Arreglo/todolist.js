window.onload = iniciar;

var tareas = [];

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

    var btnMostrarArray = document.getElementById("btnMostrarArray");
    btnMostrarArray.addEventListener("click", clickBtnMostrarArray);
}


function clickBtnAgregar() {
    var txtTarea = document.getElementById("txtTarea").value;
    tareas.push(txtTarea);
    mostrarTareas();
}

function clickBtnMostrarArray() {
    for (var i = 0; i < tareas.length; i++) {
        alert(tareas[i]);
    }
}

function mostrarTareas() {
    debugger;
    var listado = document.getElementById("listado");
    var html = "";
    for (var tarea of tareas) {
        html += tarea + "<br/>";
    }
    listado.innerHTML = html
}