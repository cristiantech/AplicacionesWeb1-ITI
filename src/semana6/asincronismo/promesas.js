// const hey = new Promise((resolve, reject) => {
//     resolve('Hola soy una promesa')
// })


// // Saber el numero de vacas de que y tengo

// let cows = 15;

// const countCows = new Promise((resolve, reject) => {
//     if(cows <= 15){
//         resolve("estamos en el rango");
//     }else{
//         const error = new Error('No valio')
//         reject(error)
//     }
// })

// countCows
// .then(response => console.log(response))
// .catch(err => console.error(err))
// .finally(() => console.log("Se cumplio el proceso"))

/**
 * resolver el ejercicio del deber
 *  
 */

function saludar(nombre) {
    return new Promise((resolve, reject) => {     
        setTimeout(() => {
            console.log(`Hola como estas ${nombre}`);
            resolve(nombre)
        }, 2000);
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`bla bla bla`);
            resolve(nombre)
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {     
        setTimeout(() => {
            console.log(`Adios amigo ${nombre}`);
            resolve()
        }, 3000);
    })
}

saludar("miguel")
 .then(hablar)
 .then(hablar)
 .then(adios)




