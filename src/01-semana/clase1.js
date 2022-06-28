// datos Primitivas
4 //Number tipo numero
"Cristian" //String tipo cadena
true // tipo bolenao
false // tipo boleano
null // vacio
undefined // vacio

typeof 4 // Number

// Tipos objetos

[1,2,"3","Samanta"] // Aaray

{
    name: "Cristian",
    lastname: "Muñoz"
}// Objeto

// variables

//declarar una variable

var edad;

// inicializar una variable

edad = 20;

var elementos = ["python", "javascript"];
elementos[1];
var carreras = {
    carrera: "Web",
    materias: "Aplicaciones web i"
}

//Funciones
// Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
//1) Declarativas

function myFunction(){
    return "Hola";
}

myFunction()
//2) De expresión

var anotherFunction = function (){
    return "hola";
}
anotherFunction();

// con parametros
var otherFunction = function (a,b){
    return a + b;
}
otherFunction(5,6)