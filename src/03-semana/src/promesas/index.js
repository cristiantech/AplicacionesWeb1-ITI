//Promesa

const pr = new Promise((resolve,reject) => {
    resolve("Het todo perfecto")
    reject("Todo salio mal :(")
})

const cats = 5;

const countCat = new Promise((resolve,reject) =>{
    if (cats <= 5) {
        resolve("Acept")
    }else{
        reject("disAprob")
    }
})

countCat
.then(function(res){
    console.log(res);
})
.catch((err) => console.log(err))
.finally(() => console.log("Het salio bien"))



