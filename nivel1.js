/*
    Comentarios
    ===========

    Empecemos con los  comentarios. Esto es un comentario. Comentarios son notas que la gente puede leer,
    pero las computadoras van a ignorar.

    Nos van a servir como guía en la introducción a JavaScript

    Un comentario puede ser de 1 sola línea, o de varias lineas.
*/

// Este es un comentario de 1 sola línea. Se hace agregando doble barra "//" al inicio de un comentario,
// esto va a comentar todo lo que este a la derecha de la doble barra "//" dentro de la misma linea.

// Debajo hay un comentario multi-linea o de varias lineas, se hace poniendo el comentario entre barras y asteriscos, de esta forma:
/*
    COMENTARIO
    DE VARIAS
    LINEAS
*/

// Cuando estás escribiendo código que querés que la máquina ejecute, ponelos AFUERA de los bloques de comentario.

/*
    Tipos de datos
    ===============
    Números: Pueden ser numeros enteros (ej: 3), decimales (ej: 7.15) y tambien numeros negativos (ej: -2.5)

    Strings: Las strings o en español, "Cadenas de texto", son caracteres que la computadora toma como texto, pueden ser palabras, letras,
    oraciones, caracteres especiales, y tambien numeros. (ej: "Hola, como estas?"), (ej: "Mi numero de telefono es +54-2281-123456.")
    A diferencia de los numeros, las strings requieren estar dentro de comillas "" para ser considerados texto por la computadora, ejemplos:
    "Esto es una string" | Esto NO es una string
    Este es el NUMERO 5 | Esta es una STRING del numero "5"

    Booleanos: Representan un valor que solo puede ser VERDADERO o FALSO | TRUE o FALSE
    Los booleanos pueden ser tambien expresiones que den como resultado verdadero o falso, por ejemplo:
    5 es igual a 7?, falso
    9 + 3 es igual a 12?, verdadero

    Nulo: Es un dato que no tiene valor intencionalmente.

    Undefined: Es un valor o dato indefinido, es muy similar al Nulo.

    Tarea: Escribi un dato de cada tipo en la CONSOLA del navegador.
*/

/*
    Mostrando contenido en pantalla
    ===============================

    Empecemos mostrando el resultado de tu código en la pantalla.

    Hay algunas maneras de hacerlo, vamos a ver algunas:

    alert('Hola Mundo!');
        Esta línea de código va a mostrar un cartelito en tu navegador con el texto 'Hola Mundo!'
        una vez que se recargue la pagina (index.html).

    console.log('Hola Mundo!');
        Esta línea de código va a mostrar 'Hola Mundo!' en la consola del navegador,
        una vez que  se recargue la pagina (index.html).

    Nota: para que cualquier cambio en el codigo tenga efecto, se debe guardar el archivo y luego recargar la pagina en el navegador.
    
    Un atajo de teclado para guardar rapido el archivo actual es "Ctrl + S".

    Para recargar la pagina en el navegador podemos usar "F5" o "Ctrl + R"
*/
alert("hola mundo")
console.log

// Tarea: Acá abajo escribí una alerta que diga "Hola mundo!"
// alert("HOLA!");
// Tarea: Una vez que la alerta funcione, comentala poniendo '//' en la línea donde está el código y guardá los cambios.
// Una vez que recargás la página, ya no debería aparecer más.
alert("aguante messi")
console.log
// Tarea: Ahora probá hacer un console.log con un mensaje que queramos.
// Al comprobar que funciona, comentar la linea del console.log

/*
    Variables
    =========

    Una variable es un lugar para guardar información. Para declarar una variable usamos 'let', de esta forma:

    let nombreDeVariable;

    Con esto creamos una variable llamada nombreDeVariable, pero no tiene información o valor, está indefinida.
    Por el momento contiene el dato 'undefined'.

    Si imprimimos la variable en la consola con console.log podemos verlo.
    console.log("nombreDeVariable es " + nombreDeVariable);

    El resultado va a ser "nombreDeVariable es undefined".

    Para darle un valor a nuestra variable (o mejor dicho ASIGNAR un valor), usamos el signo '='.

    nombreDeVariable = 'Hola Mundo!';

    También podemos crear (declarar) y darle valor (asignar) a una variable en una sola linea (la INICIALIZAMOS).

    let nuevaVariable = 1;

    Como pueden ver, le podemos dar los distintos tipos de datos que ya aprendimos a nuestras variables
    (Strings, Numeros, Booleanos, Undefined, Nulo/Null)

    Nota: En JavaScript y en la mayoria de los lenguajes de programacion el "=" es un simbolo de asignacion, y en cambio se usa
    el doble o triple igual "==" | "===" para hacer una comparacion
*/

// Tarea: Creá 2 variables indefinidas, llamadas numeroUno y numeroDos.
//let num= "messi"




/* 
    Una buena practica es que los nombres de tus variables sean representativos de la informacion que llevan dentro, por ejemplo:

    let saludo = 'Hola Mundo';
    alert(saludo);

    Esto va a mostrar un cartel en el navegador con el texto 'Hola Mundo!'
*/

// Tarea: Crea 2 variables nuevas, una con tu nombre, la segunda con tu edad.
// Dales un nombre apropriado y mostralas con un alert.

// Consejo: para mostrar 2 variables de texto al mismo tiempo, las podés unir usando el signo '+'. Ejemplo:

/*
   let nombre = 'Agustin'
   let apellido = 'Migliorero'
 
   alert(nombre + apellido)
*/
//let nombre= 'ignacio'
let apellido= 'altamirano'


/*
    Constantes
    ==========

    Una constante es como una variable, pero se le da un valor cuando es creado y no se puede cambiar mientras
    se el programa este en ejecucion.
    En otras palaras, una constante siempre tiene la misma información mientras este corriendo el programa.

    Para declarar (crear) una constante, usamos la palabra reservada (keyword) "const".

    Ejemplo:

    const circunferenciaTierraKm = 6371;

    Asignar un nuevo valor a la constante nos va a dar un error, no podemos hacer:
    circunferenciaTierraKm = 6400;
*/

// TAREA: Crear una constante y mostrarla con un alert
//const tierra=5000;

// TAREA: Intentar asignar un valor a una constante y ver qué pasa (mirar la consola)
//const planeta=5000;
const agua=50000;



// Consejo: No te olvides de comentar (//) los alerts y los errores intencionales (como en la tarea anterior) para
// que los alerts no aparezcan cada vez, y para que los errores no hagan que el programa se detenga.

/*
    Matemática - Operadores aritméticos (sumas, restas, multiplicación y división)
    ============================

    Hay muchos 'operadores' diferentes en programación. Veamos los operadores aritéticos ahora.
    JavaScript incluye operadores estándares (+, -, /, *) que se pueden usar para hacer operaciones matemáticas.

    Ejemplo:

    let resultado = 1 + 3;
    console.log(resultado);

    Esto va a imprimir el número 4 en nuestra consola.
*/

//
// Tarea: Crear 3 variables:
//
// * 1ra variable llamada 'diez' con valor 10
// * 2nda variable llamada 'tres' con valor 3
// * 3ra variable llamada resultadoMultiplicacion que va a ser igual a
// la 1ra variable multiplicada (con el operador *) por la 2nda variable.
// Mostrar el valor de resultadoMultiplicacion en consola con console.log

let diez = 10;
let tres = 3;
let resultadomultiplicacion = (diez*tres);
console.log (resultadomultiplicacion);


/*
    Operadores de comparación
    =========================

    Recien vimos una introduccion a los operadores aritméticos de JavaScript (+, -, *, /).
    Ahora es momento de presentar el siguiente set de operadores, los 'Operadores de comparación'.
    Son usados para comparar valores:
    >   // Mayor que
    <   // Menor que
    <=  // Menor o igual que (se escribe en este orden, =< no existe)
    >=  //Mayor o igual que (se escribe en este orden, => es usado para otra cosa)
    ==  //Igual que, compara solo los datos, sin importar el tipo (1 == 1 | 1 == "1")
    === //Exactamente igual que (1 y "1" no son iguales, pero 1 es exactamente igual a 1 y "1" es exactamente igual a  "1"). Este operador compara el valor y el TIPO DE DATO del valor.
    != //Distinto que (sin darle importancia al TIPO DE DATO)
    !== //Distinto que (dándole importancia al TIPO DE DATO)

    Atención: No mezclar "=" y "==" ó "===" porque tienen distintos significados.
    "=" significa "asignar". miVariable = 1.
    "==" ó "===" son operadores de comparacion.

    El resultado de un operador de comparación es un valor Booleano (true o false, verdadero o falso)

    Por ejemplo:

    3 < 4 es VERDADERO (TRUE), porque 3 es menor que 4.
    1 + 1 === 3 es FALSO (FALSE), porque 1 + 1 no es igual a 3.
*/

// Tarea: Proba en la consola (con console.log) que resultado dan estas comparaciones:
// 5 >= 4
// 3 < 2
// 3 === "3"
// 3 + 7 == "10"
// 8 !== 12
/*console.log (5>=4)
console.log (3<2)
console.log (3==="3")
console.log (3+7=="10")
console.log (8 !==12)*/

/*
    Funciones
    =========

    Una función es un conjunto de instrucciones que se ejecuta cada vez que la llamamos.
    Las funciones toman parámetros de entrada (ARGUMENTOS o INPUT), y calculan el resultado basado en esos valores y
    devuelven (RETURN) un resultado ó OUTPUT.

    Para crear una función vamos a usar el siguiente formato:

    function nombreFuncion(nombreArgumento) {
        return nombreArgumento * 2;
    };

    Esta función va a tomar sólo 1 argumento y va a devolver (RETURN) el argumento multiplicado por 2.

    Nuestra función acaba de ser DEFINIDA, pero no se va a ejecutar/correr si no la 'llamamos'.

    Para llamar/ejecutar la función usamos el siguiente formato:

    nombreFuncion(10); // El nombre de la funcion, seguido por el/los argumento/s entre parentesis, ej: nombreDeFuncion(argumento1);

    Esto va a a llamar nuestra funcion con el argumento 10, y nuestra función va a devolver 20 (10 * 2).
    Para poder ver lo que nuestra  función devuelve, podemos pasársela como argumento a console.log.

    Por ejemplo:

    console.log(nombreFuncion(10));

    Esto hace que el resultado de nombreFuncion(10), en este caso, 20 (10 * 2) se pase a console.log.
    Es decir que sería equivalente a hacer console.log(20)

    Consejo: La palabra reservada (keyword) 'return' es usada para definir el valor que devuelve la función,
    podemos hacer cosas ANTES de ejecutar 'return', pero después del 'return' la función termina.

    Ejemplo:

    function codigoDespuesDelReturn(){
        console.log("Hola!") //Esta linea SI se ejecuta
        return 1;
        console.log("Chau!"); //Esta linea nunca se ejecuta
    }

    Consejo: Podemos aceptar múltiples argumentos (tambien llamados parámetros) separándolos con una coma ','.

    function nombreFunction(argumento1, argumento2) {
    }
*/

// Tarea: Es tu turno de crear una función!

// Creá una función llamada 'sumar'
// Escribí código para que acepte 2 argumentos (numero1 y numero2)
// Escribí código para que devuelva (return) la suma de numero1 y numero2
// Ejecutá la función sumar y mostrá su resultado en la consola
/*function sumar(){
    let num = 5;
    let num2 = 5;

    return num + num2;    

}
console.log (sumar());*/

// Tarea: Ahora creemos otra función llamada 'restar'
// Esta vez que acepte 2 números como parámetro, los reste, y retorne el resultado.
// Ejecutá la función con los números 5 y 1 y mostralos con console.log


/*function resta(){
    let num = 10;
    let num2 = 5;
    return num - num2
    

}
console.log (resta());*/

// Consejo: Sabías que en vez de pasar los números directamente a tu función podés crear variables con esos números
// y pasarlos como parámetros? Probalo!

// Consejo: Dejá las funciones como están, no las comentes, las vamos a usar de nuevo.

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