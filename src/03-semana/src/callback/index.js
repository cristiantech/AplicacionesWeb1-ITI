//Manipulacion de Arrays

//push, pop, shift, unshif
//filter find flat join concat

const carrera = [ 
    {name: "redes", horas: 800, practicas: 140},
    {name: "Aplicaciones", horas: 900, practicas: 240},
] 
const newArray = [];
for (let i = 0; i < carrera.length; i++) {
    const element = carrera[i];
    newArray.push(element.name)
}
console.log(newArray);
console.log("*".repeat(10));
const newArray2 = carrera.map((i)=> i.name )
console.log(newArray2);

const newArray1 = carrera.map((item)=> item.name)
console.log(newArray1);




//Mutable e inmutable

const newCarrera = carrera;

newCarrera[0].name = "turismo"
console.log(newCarrera);
console.log(carrera);


// memoria heap 
// memoria stack
let num = 1;
let num1 = 2;






// Asincronismo


function sum(num1, num2) {
    return num1 +  num2;
}


function call(num1, num2, callback){
    return callback(num1, num2);
}


console.log(call(5,10,sum));

1
setTimeout(()=>{
    console.log(2)
    3
}, 0)
4
//Herencia
//Abstraccion
//Ebcapsulamineto
//Polimorfismo

class Personas{

    constructor(name,edad,email){
        this.name = name;
        this.edad = edad;
        this.email = email;
    }

    open(){
        console.log(`Mi nombre es ${this.name}`);
    }
}

const per1 = new Personas("cristian",27,"crist2306@hub.com")
const per2 = new Personas("carlos",35,"carlos.r@hub.com")

per1.open()











