//Fetch
// npm i node-fetch
// const fruist = ['pera', 'manzana', 'mandarina'];
// for (let i = 0; i < fruist.length; i++) {
//     console.log(fruist[i]);
// }
// fruist.forEach(i => console.log(i));


import fetch from 'node-fetch';
const API = 'https://rickandmortyapi.com/api';


// const isTrue = new Promise((resolve,reject)=>{
//       if (true) {
//           resolve("Hey felicidas")
          
//       }else{
//           reject("Error")
//       }
// })

// isTrue
// .then(i => console.log(i))
// .catch(i)

const fetchData = (urlApi) => {
    return fetch(urlApi).then(res => res.json());
}

const anotherFn = async (){
    try {
        const data1 = await fetchData(`${API/character}`);
        console.log(data1);
    } catch (error) {
        console.log(error);
    }
}





fetchData(`${API}/character`)
.then(data1 => {
    console.log(data1.info.count);
    return fetchData(`${API}/character/${data1.results[0].id}`) 
})
.then(data2 => {
    console.log(data2.name);
    return fetchData(`${API}/location/${data2.id}`)
})
.then(data3 =>{
    console.log(data3.dimension);
})
.catch((er) => {
    const error = new Error("Error "+ er);
    console.log(error);
})