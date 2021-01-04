function cargarJson() {
    //fetch('https://jsonplaceholder.typicode.com/todos/1') /*Traemos la información de la URL */
    //  .then(response => response.json()) /*Así se trae el JSON con una promesa json()*/
    //   .then(jsonCargado); /**Aca expresamos lo que devuelve el JSON */

    let promesa = new Promise(resolver => {
        setTimeout(() => {
            let json = {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
            resolver(json)
        }, 5000)

    });

    promesa.then(json => {
        jsonCargado(json)
    });


}


function jsonCargado(json) {
    let txtNombrePost = document.getElementById("txtNombrePost");
    txtNombrePost.innerText = json.title;

    let txtCompleto = document.getElementById("txtCompleto");
    txtCompleto.innerText = json.completed ? "Está Completo" : "No esta completo";

    console.log(json);
}

cargarJson();