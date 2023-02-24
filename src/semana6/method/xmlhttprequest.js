/**
 * Proyecto de consumo de API
 * Nombre de mi personaje en la posicion 1
 * Nombre de la location
 * Location quiero saber la dimencion
 */
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
console.log(XMLHttpRequest);
const API = 'https://rickandmortyapi.com/api/';

function fetchData (urlAPI, callback){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true); // para abrir la conección
    xhttp.onreadystatechange = (eve) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }
        } else {
            const error = new Error('No valido' + urlAPI);
            callback(error, null)   
        }
    }
    xhttp.send()
}


fetchData(`${API}character`, (error1, data1) => {
    if (error1) return console.error(error1);
    //onsole.log(data1.results[0].id);
    fetchData(`${API}character/${data1.results[0].id}`, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(`${API}location/${data2.id}`, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(`El nombre del personaje es ${data1.results[0].name}`);
            console.log(`la locacion  del personaje es ${data2.location.name}`);
            console.log(`la dimencion  del personaje es ${data3.dimension}`);
        })
    })
    
})


/**La tarea es la suguiente
 * 1.El mismo ejercio la va a realizar con promesa la funcion fetchData
 * 2.VA a consultar el metodo fetch y lo va implementar del ejercicio dado con promesas
 * para el 1 y 2 con los mismos resultados
 * 
 */