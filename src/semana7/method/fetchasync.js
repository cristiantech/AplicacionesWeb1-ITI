import fetch from "node-fetch";
const API = 'https://rickandmortyapi.com/api/';


const fetchData = async (urlApi) => {
   const data = await fetch(urlApi).then(response => response.json());
    return data;
}

const main = async (urlApi) => {
    try {
        const personaje = await fetchData(`${urlApi}character`);
        const location = await fetchData(`${API}character/${personaje.results[0].id}`);
        const dimencion = await fetchData(`${API}location/${location.id}`)
        console.log(`El nombre del personaje es ${personaje.results[0].name}`);
        console.log(`la locacion  del personaje es ${location.location.name}`);
        console.log(`la dimencion  del personaje es ${dimencion.dimension}`);
    } catch (error) {
        console.error('no valido' + error);
    }
}

main(API)