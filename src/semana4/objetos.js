
const fruits = {
    nombre: "pera",
    precio: 0.30,
    provedores: ["quala", "Arca"],
    detalle: function(){
         console.log(`nuestra fruta ${this.nombre} tiene un presio ${this.precio}`)
        }
}


//Funcion constructura
function frutas(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

let fruta1 = new frutas()
let fruta2 = new frutas('banana', 0.8)

console.log(fruta1);
console.log(fruta2);
