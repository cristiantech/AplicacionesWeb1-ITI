import fetch from 'node-fetch';
const API = 'https://rickandmortyapi.com/api/';

function fetchData (urlApi){
    return fetch(urlApi);
}

fetchData(`${API}character`)
.then(response => response.json())
.then(personaje => {
    console.log(`El nombre del personaje es ${personaje.results[0].name}`);
    return fetchData(`${API}character/${personaje.results[0].id}`)
})
.then(response => response.json())
.then(location => {
    console.log(`la locacion  del personaje es ${location.location.name}`);
    return fetchData(`${API}location/${location.id}`)
})
.then(response => response.json())
.then(dimencion => {
    console.log(`la dimencion  del personaje es ${dimencion.dimension}`);
})
