window.onload = iniciar;

function iniciar() {
    let btnCargar = document.getElementById('btnCargar');
    btnCargar.addEventListener('click', clickButton);
}

async function cargarURL(url) {
    let response = await fetch(url);
    return response.json();
}

async function clickButton() {

    let pais = document.getElementById('selectPais').value;

    if (document.getElementById('inputFecha').value) {
        var fecha = document.getElementById('inputFecha').value;
    } else {
        alert("Seleccióne una Fecha!");
        return;
    }

    let url = `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;
    let json = await cargarURL(url);

    //let json = await cargarURL('https://api.covid19tracking.narrativa.com/api/2020-05-05/country/spain');
    //console.log(json);
    let estadisticas = json.dates[fecha].countries[pais];
    //console.log(estadisticas);

    document.getElementById('today_new_confirmed').innerHTML = estadisticas.today_new_confirmed;
    document.getElementById('today_new_deaths').innerHTML = estadisticas.today_new_deaths;
    document.getElementById('today_new_hospitalised_patients_with_symptoms').innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
    document.getElementById('today_new_intensive_care');
    document.getElementById('today_new_open_cases').innerHTML = estadisticas.today_new_open_cases;
    document.getElementById('today_new_recovered').innerHTML = estadisticas.today_new_recovered;
    document.getElementById('today_new_total_hospitalised_patients').innerHTML = estadisticas.today_new_total_hospitalised_patients;
}