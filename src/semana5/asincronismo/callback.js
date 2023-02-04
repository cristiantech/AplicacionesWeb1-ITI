/**
 * Callback
 */
// function suma(num1, num2){
//     return num1 + num2
// }

// function operaciones(num1, num2, callback) {
//    return callback(num1, num2)
// }

// console.log(operaciones(8,15,suma));


function saludar(nombre, callback) {
    setTimeout(() => {
        console.log(`Hola como estas ${nombre}`);
        callback()
    }, 2000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log(`bla bla bla`);
        callbackHablar()
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios amigo ${nombre}`);
        otroCallback()
    }, 3000);
}

console.log("Iniciando proceso");
saludar("cristian", () => {
    hablar(() => {
        hablar(() => {
            hablar(() => {
                adios("cristian", () => {
                    console.log("Terminando el proceso")
                })
            })
        })
    })
})

// Implemtar del ejercicio dado promesas y async y await

// Realizar un ensayo sobre XMLHTTPReques, Fetch y Axios


