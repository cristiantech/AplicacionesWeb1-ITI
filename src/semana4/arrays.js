const arraySecret = ["banana",2,"mango", 2, "pera", 2, "mandarina", 2]
//console.log(fruits.length()); => para indicar cuantos valores tenemos
//Desetructurar un arreglo
//let [primeraFruta] = fruits
//fruits.push("banana") => add al final
//fruits.pop() => de rm al final

// console.log(typeof arraySecret[0]);
// const solution = (array) => {
//     if(typeof array[0] === "String".toLowerCase()){
//         return true
//     }else{
//         return false
//     }    
// }
let ultimo = arraySecret.length
console.log(ultimo);
console.log(typeof arraySecret[0]);
const solution = (array) => {
    if(typeof array[ultimo - 1] === "string"){
        return true
    }else{
        return false
    }    
}
console.log(solution(arraySecret))


// fruits.unshift("uva")
// console.log(typeof fruits[0]);
// function solution(array){
//     if(typeof array[0] !== "number"){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(solution(fruits));