/**
 * Funciones asincronas
 * Async
 * va esperar es el await
 */

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async'), 5000)
            : reject(new Error('Error'));
    })
}


const anotherFunction = async () => {
    const response = await fnAsync();
    console.log(response);
    console.log('hello');
}

console.log('antes');
anotherFunction();
console.log('despues');