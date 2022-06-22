# Aplicaciones Web I
## Fundamentos de JavaScript

##### ¿Cómo nace Javascript?
    Nace con la necesidad de generar dinamismo
    en las páginas web y que a su vez los
    usuarios y las empresas pudieran
    interactuar unos con otros.
  
###### ¿Qué es Javascript?
    Es un lenguaje interpretado, orientado a
    objetos, débilmente tipado y dinámico.
###### Débilmente tipado
    Se pueden hacer operaciones entre tipos
    distintos de datos (enteros con strings,
    booleanos con enteros, etc). Ejemplo:
```javascript
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```
##### Dinámico
    Corre directamente en la etapa de Runetime sin una etapa de compilación previa. 
    Esto permite probar nuestro código  inmediatamente; pero también es lo que hace que los errores se muestren hasta que se 
    ejecuta el programa.
##### ¿Realmente es Javascript un lenguaje interpretado?
    Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. 
    Todo esto es controlado por el motor de Javascript V8 del navegador
##### Javascript es Basckwards Compatible
    Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. 
    Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

#### Funciones declarativa y de expresion
    Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones:
    Funciones Declarativas (function declaration / function statement) y 
    Expresiones de función (function expression / funciones anónimas).

##### Funciones Declarativas:
    En las funciones declarativas, utilizamos la palabra reservada function al
    inicio para poder declarar la función:
```javascript
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
```
##### Expresión de función:
    En la expresión de función, la declaración se inicia con la palabra 
    reservada var, donde se generará una variable que guardará una función 
    anónima.
```javascript
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
nombre(‘Diego’);
```
En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

##### Diferencias:
- A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

- Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.