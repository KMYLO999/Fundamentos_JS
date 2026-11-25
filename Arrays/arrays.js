/*ARRAY O ARREGLOS
Un array es una estructura de datos que permite almacenar una colleción ordenada de elementos; estos elementos pueden ser cadenas de texto, valores numéricos, booleanos, entre otros. Igual,emte podrían ser un conjunto de funciones e inclusive otros arrive 
*/

// Declaraciónde un array vacío
let numeros = [];
// Llenar un array con elementos, cada elemento dentro del array se separa por comas. 

numeros = [5,4,8,12,16,35,44,2];
document.writeln(`Elementos: `, numeros)
document.writeln(`<br>`);

// Un arrive puede declararse directamente sin ser declarado
Numeros = [5,10,15,20,25,30,35];
document.writeln(`Elementos: `, Numeros)
document.writeln(`<br>`);

// Visualizar uno o alguno de los elemtnos del array segun parámetro o indice indicado
document.writeln(`Elemento discriminado: `, numeros [3]);
document.writeln(`<br>`);
document.writeln(`Elemento discriminado: `, Numeros [0]);
document.writeln(`<br>`);

// Cambiar un elemetno del array indicando el indice de posición y/o ubicación existente y el valor del elemento a cambiar.
numeros [3] = 84;
document.writeln(`Cambio de un elemento: `, numeros);
document.writeln(`<br>----------------------------`);
document.writeln(`<br>`);

// Array con valores de tipo texto o strings
let frutas = [`Manzanas`, `Peras`, `Mandarinas`, `Naranjas`, `Kiwi`];
document.writeln(`Diversas frutas: `, frutas);
document.writeln(`<br>`);

// Métodos de los ARRAY 

// Ver la cantidad de elementos
document.writeln(`Cantidad de elementos del array de Frutas: `, frutas.length)
document.writeln(`<br>`);
document.writeln(`Cantidad de elementos del array de Numeros: `, Numeros.length)
document.writeln(`<br>----------------------------`);
document.writeln(`<br>`);

let abecedario = [`A`,`X`,`Z`,`C`,`D`,`B`,`R`,`S`,`W`,`K`,`T`];
document.writeln(abecedario); 
document.writeln(`<br>`);

document.writeln(abecedario.sort()); // Organiza alfabeticamente las letras.
document.writeln(`<br>`);

// Función Reverse organiza los elementos alfabeticamente pero en inversa.

document.writeln(abecedario.reverse()); // Organiza alfabeticamente las letras.
document.writeln(`<br>`);


