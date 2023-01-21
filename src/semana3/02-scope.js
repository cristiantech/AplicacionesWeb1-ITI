/**
 * Scope global => var
 * Scope local => funciones
 * block Scope => let, const
 */
let nombre = "cristian"


let saludar = () => {
    var lastName = "Muñoz"
    console.log(`Hola mi nombre es ${nombre} y mi apellido es ${lastName} `);
    {
        console.log(lastName);
        let anotherName = "David";
        console.log(anotherName);
    }
    anotherName = "Te hackee..!"
    console.log(anotherName);
}
saludar()