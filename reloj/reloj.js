setInterval(() => {
    let reloj = document.getElementsByClassName("reloj")[0];
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = tiempoActual.getSeconds();
    if (hora < 10) {
        minutos = `0${hora}`
    }
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    if (segundos < 10) {
        segundos = `0${segundos}`
    }
    reloj.innerHTML = `RichardS ${hora}:${minutos}:${segundos}`;
}, 1000);