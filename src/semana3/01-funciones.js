
// funciones declarativas
let nombre = "cristian";

function saludar (params, params1){
    console.log("hola "+ params + " " + params1);
}
saludar("davis", "Muñoz")

function sumar(num1, num2){
    return num1 + num2
}
let res = sumar(3,5)
console.log(sumar(5,10));
console.log(res);
// funciones expresiva o anonimas
let sumar = function(num1, num2){
    console.log("el resultado es "+ (num1 + num2));
}

sumar(2,3)

let sumarES6 = (num1, num2) => console.log(`El resultado de la suma de ${num1} + ${num2} es`, num1 + num2);

sumarES6(3,5)


let saludarES6 = nombrecito => {
    console.log(`Hola como estas ${nombrecito}`)
};
saludarES6("Juancito")