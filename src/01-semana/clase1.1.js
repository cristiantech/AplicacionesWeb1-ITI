//Scope global y local

var Nombre = "Cristian";

    let myFunction =  () => {
        var localOne = "Manuel";
    return console.log(Nombre);
    }
myFunction()
console.log(localOne);

//block scope let y const , function scope


//hoisting cuando las variables y funciones <= Ec5
// se declaren antes que se proces cualquier tipo de codigo var, function

numero = undefined;
console.log(numero);
var numero = 10;

var saludo = "Juan";
function hey(){
    return `hola ${saludo}`;
}
console.log(hey());

//Coerción Implicita y explicita
//Implicita
4 + "7";
4 * "7";
//explicita
let numero1 = "755eerc";
let conNumber = Number(numero1);
let numberToCadena = 7;
let 
//Diferencia entre Number y parseInt()
parseInt
console.log(typeof conNumber);

//Valores true y false Boolen()

false
0
null
undefined
NaN
""

Verdaderos
true
1
" "
[]
{}

//Operadores Asignación, Arimeticos , Comparación y logicos

Arimeticos
5 + 2 //suma
3 * 2 // multiplicacion
2 - 1 // resta
5 / 3 // divicion
5 % 3 // resto
5 ** // potencia

Asignacion
!false
var list = [];
+= 
*=

Comparacion
< 
>
5 == "5"
==
===

Logicos

&& //and
1 1 1
1 0 0
0 1 0
0 0 0
|| //or
1 1 1
1 0 1
0 1 1
0 0 0

//Condicionale if, else ? true : false

// si algo es verdadero haga lo siguiente 
// else si no haga EventSource

let desicion = false;


if (desicion) {
    console.log("Verdadero");
}else{
    console.log("perdiste");
}

ternarios

let total = 5 > 7 ? "Verdadero" : "falso";
console.log(total);

//Switch


//array[] +push() -pop()  +unshift() -shift() indexof

//loops of while

//Objetos .

