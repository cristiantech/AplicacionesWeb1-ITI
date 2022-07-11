//switch

// var num1 = 1;
// var num1 = 2; //reasignacion
 
// const num = 1;

// switch (num) {
//     case 1:
//         console.log(`eres el valor numero ${num}`);  
//         break
//     case 2:
//         console.log(`eres el valor numero ${num}`);
//     default:
//         console.log(`eres el valor numero ${num}`);
// }

const fruits = ["banana", "manzana", "pera", "fresa"]; //declarando
//push pop shif unshif
fruits[0]
console.log(`fruta orginas `, fruits);
fruits.push("uva")
console.log(`frutas agregadas`, fruits);
fruits.pop()
console.log(`frutas agregadas`, fruits);
fruits.unshift("naranaja")
console.log(`frutas agregadas`, fruits);



// loops ciclos 

const fruitsOne = ["banana", "manzana", "pera", "fresa"];

// for(let i=0; i< fruitsOne.length; i++){
//     let el = fruitsOne[i]
//     debugger
//     console.log(`La fruta es `, el);
//
for (let fr in fruitsOne) {
    console.log(`La fruta esta en la posicion `, fr);
}

const fruitsOne1 = ["banana", "manzana", "pera", "fresa"];
let i = 0
while (i < fruitsOne1.length) {
    console.log(fruitsOne1[i]);
    i++
}


// Objetos
// mongo db json 
// Api vienes en json 

const alumnos = {
    name: "cristian",
    edad: 30,
    carreras: [
        "Redes","Aplicaciones web"
    ],
    imprimeNombre: function () {
        console.log("el nombre es " + this.name());
    }
}
alumnos.carreras.push("turismo");

console.log(alumnos.imprimeNombre);


const Alumnos = function(name, edad, email){
    this.name = name;
    this.edad = edad;
    this.email = email
    this.imprimeNombre = function () {
        console.log("el nombre es " + this.name);
    }
}

let alu = new Alumnos("manuel", 33, "m.gmail.com")
console.log(alu.imprimeNombre());

//manipulacion de array Map, filter, some, forEach, Find, findIndex











const resultado = 0;

for (let i = 0; i < i < 10; i++) {
    
    console.log(resultado += i);
}

console.log( false === !true)















