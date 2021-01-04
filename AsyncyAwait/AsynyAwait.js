async function cargarURL(url) {
    let respuesta = await fetch(url);
    return respuesta.json();
}

async function cargarJson() {

    let json = await cargarURL('https://jsonplaceholder.typicode.com/todos/1');

    let txtNombrePost = document.getElementById("txtNombrePost");
    txtNombrePost.innerText = json.title;

    let txtCompleto = document.getElementById("txtCompleto");
    txtCompleto.innerText = json.completed ? "Está Completo" : "No esta completo";

    console.log(json);
}

cargarJson();