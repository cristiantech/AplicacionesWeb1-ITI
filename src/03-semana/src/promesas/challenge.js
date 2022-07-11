const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';

const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', urlApi, true);
        xhttp.onreadystatechange = (e) => {
           if (xhttp.readyState === 4){
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText))
                }else{
                    reject(`Hola`)
                }
           }
        }
        xhttp.send()
    })        
}


fetchData(`${API}/character`)
.then((res) => {
    fetchData()
})

