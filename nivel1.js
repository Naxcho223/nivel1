/*
    Condicionales | If - Else
    =========================

    Qué pasa si en nuestro programa queremos decidir sobre
     qué función debería ejecutarse? Tenemos que usar condicionales!

    "Si (if) tenés comida en la heladera, podés comer. Si no (else),
     vas al supermercado a comprar."

    Es lo mismo con el código. Le podés dar una condición 'if' a 
    un programa para que haga una decisión acerca de qué
    parte del código tiene que ejecutarse.

    Estructura:

    if (condición) {
        // hacer esto (la condición se cumplió)
    } else {
        // hacer otra cosa, porque la condición no se cumplió
    }
*/

// if (hay comida en la heladera?) {
//   COMER
// } else {
//   IR AL SUPERMERCADO
// }

// Tarea: Tenemos 2 funciones de la tarea anterior ("sumar" y "restar")
// Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador arItmético (+, -, /, *, etc.)
//
/*function restar (A , numB){
    return A - numB
}
function sumar (A , numB){
    return A + numB
}
let operador = "-";
let A = 8
let numB = 9
if (operador === "/") {console.log (restar(A , numB))

} else {console.log (sumar(A , numB))

}



// Si el operador es "+", vamos a usar la función para sumar.
// Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada "operador" y asignarle el valor "+".
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en la variable "operador".
// Si el operador es igual a "+", llamamos la función "sumar" con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función "restar", con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// if (condición) {
//     // hacer esto (la condición se cumplió)
// } else {
//     // hacer otra cosa, porque la condición no se cumplió
// }

// Tarea: Cambiar el operador a "-", y fijarse que llame a la función "restar" en vez de a la de "sumar".

/*
    'If' - 'Else if' - 'Else'
    ========================

    Bueno, y qué pasa si tenemos 4 operaciones aritméticas en nuestra calculadora? Bueno, entonces usamos una estructura así (pseudocódigo):
    if(condicion)
        //algo
    else if(condicion)
        //algo
    else
        //algo que va a pasar si no se cumple ningún otra condición
        

    Ejemplo:

    const numero = 7;
    if (numero > 7) {
        console.log('Nuestro número es mayor a 7');
    } else if (number < 7) {
        console.log('Nuestro número es menor a 7');
    } else {
        console.log('Nuestro número es igual a 7');
    }

    Consejo: Podemos usar la cantidad de 'else if' que queramos uno después del otro, 
    la primer condicion que sea "verdadera" es la que se va a ejecutar, ignorando al resto.
*/

// Tarea: Creemos 2 funciones más: dividir y multiplicar.

/*function dividir (O ,  K){
    return O / K
}
function multiplicar (O , K){
    return O * K
}
let O = 4
let K = 2
let operador = "/";
if (operador === "/") {console.log (dividir(O , K))

}else {console.log (multiplicar (O , K))

}*/

function dividir (L , P){
    return L / P
}
let L = Number(prompt("ingrese un digito"))
let P = Number (prompt("ingrese un digito"))
let operador = "+"
console.log (dividir(L , P)) 

function multiplicacion (L , P){
    return L * P
}
if (operador === "/") {console.log (dividir(L , P))

} else if(operador === "+"){

    console.log (multiplicacion(L , P))
} else {
console.log ("Perdón,no conozco ese operador")
}
 








// Tarea: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".







//Bonus: Usa prompts para que el usuario pueda ingresar el operador y los numeros el mismo desde el navegador!.

/*
    Operadores Booleanos
    =================
    Poner un signo de exclamación (!) antes de un valor Booleano nos da el valor OPUESTO.
    Este operador "!" se llama el operador "not".
    
    El resultado de una comparación es un valor Booleano, lo podemos guardar en una variable así:

    const bool = (1 < 2);

    Después podemos chequear si 'bool' es verdadero o falso (true o false) usando console.log

    console.log(bool); // Devuelve veradero (TRUE), porque 1 es menor a 2
    console.log(!bool); // devuelve "no verdadero"... es decir falso (FALSE)

    También podemos asignar un valor booleano directamente a una variable o constante con
    las palabras reservadas (keywords) true y false:

    const elAguaMoja = true;
    let elCieloEsVerde = false;
*/

// TAREA: usando el operador !, Intentá invertir una variable (de true a false, o de false a true) e imprimí el
// resultado en la consola.
const bool = (10 < 5);

console.log(bool);
console.log(!bool);




/*
    Arrays
    ======

    Un array (o "arreglo" en español) es una lista ordenada de valores. 
    Podes guardar cualquier cantidad de valores dentro de el.
    Acepta cualquier tipo de valores: números, strings, objetos, incluso otros Arrays.

    Ejemplos:

    let animales = ['gato', 'perro', 'caballo'];
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let numeros = [1, 2, 8, 19];
*/

// Tarea: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas cosas que te gustan.





/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    ".length" 

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4 porque este array tiene 4 elementos dentro.
*/

// Tarea: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.

/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando corchetes []. 
    Los índices del array se comienzan a contar desde 0. El uso se ve así.

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];
    let segundoItem = cosasAleatorias[1]; 
    y así sucesivamente

*/

// Tarea: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

/*
    Cambio de Valores en Arrays
    =========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // reemplacemos 'perro' con 'pez'
    animales[1] = 'pez';

    // ahora nuestro array de animales sera ['gato', 'pez', 'caballo'];
*/

// Tarea: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.

// Tarea: console.log todo el array para verificar.

/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');

    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/

// Tarea: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.

// Tarea: console.log todo el array para verificar.

/*let comidasFavoritas = ['Pizza' , 'Hamburguesa' , 'Ravioles' , 'Arroz']
comidasFavoritas.push('sopa');
console.log(comidasFavoritas.length);*/



/*
    Nota acerca Arrays constantes
    =============================

    Un array es lo que se conoce como un "tipo de referencia". Lo que esto significa es que
    incluso si un array se declara (crea) usando "const", los valores *dentro* del
    array todavía se pueden cambiar; el array en sí es lo que no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // El siguiente codigo es correcto y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');


    // El siguiente codigo es incorrecto y devolverá un error igual al que se genera al cambiar cualquier constante:
    animales = [ 'mouse', 'elephant' ];
 */

// Tarea: Intenta crear un array como una constante y modifica los valores que contiene.
const comidafavorita = ["arroz" , "ensalada" , "guiso" , "fideos"]
comidafavorita [1]= "perro";
console.log(comidafavorita)

// Tarea: Observa lo que sucede si agregas algo con .push(),
// que sucede si cambias algo con los corchetes (nombreArray[1])
// intenta asignar un array completamente nuevo a la constante ya declarada
const animeales = ["perro" , "gato"]
animeales[1] = "elefante";
console.log(animeales)