//Traer el paquete de xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Generando un String de mi API de Rick
const API = 'https://rickandmortyapi.com/api';

//Generar una funcion para  traer los datos 
function fetchData(urlApi, callback){
    return new Promise((resolve, reject) => {
        
    })
    let xhttp = new XMLHttpRequest();
    //Abre la conexion de la API
    xhttp.open('GET', urlApi, true);
    // Verifica el estado de la conexion
    xhttp.onreadystatechange = function (even) {
        // Validar el estado de la conexion
        if (xhttp.readyState === 4) {
            //validar las respuesta del servidor
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error '+ urlApi);
                callback(error, null)
            }
        }
    }
    //enviar la solictud
    xhttp.send()
}
//Te guardo en memoria 
const newArray = [];
//llamo a mi function
//Asincronismo
fetchData(`${API}/character`, function(error1,data1){
    if (error1) return console.error(error1);
    fetchData(`${API}/character/${data1.results[0].id}`, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(`${API}/location/${data2.id}`,function(erro3,data3){
            if (erro3) return console.error(erro3);
            newArray.push(data1.info.count)
            
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})
//
console.log(newArray);



