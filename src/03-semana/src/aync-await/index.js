const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Async ..!"), 2000)
        : reject(new Error('Error..!'))
    })
}

const anotherFn = async () =>{
    try {
        const something = await fnAsync();
        console.log(something);
        console.log("hello");
    } catch (error) {
        console.log("Error");
    }
   
}
console.log("Antes");
anotherFn();
console.log("despues");