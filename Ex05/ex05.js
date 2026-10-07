// operadores matemáticos

let a, b ;
let c, d;

let suma, resta, mult, div, residuo, potencia

//obtener los datos a través del usuario
a = prompt(`Ingrese un número`); 
b = prompt(`Ingrese otro número`)

// Resultado de las operaciones
suma = a + b; // Aquí la operación da un error debido a que se concatenan los datos
document.writeln("La suma es: ", suma,"<br>");
console.log("La suma es: ", suma);

resta = a - b;
document.writeln("La resta es: ", resta,"<br>");
console.log("La resta es: ", resta);

mult = a * b;
document.writeln("La multiplicación es: ", mult,"<br>")
console.log("La multiplicación es: ", mult);

div = a / b;
document.writeln("La división es: ", div,"<br>")
console.log("La división es: ", div);

residuo = a % b;
document.writeln("El residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

potencia = a ** b;
document.writeln("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);


//Obtener los datos a través del usuario
c = parseInt(prompt(`Ingrese un número`));
d = parseInt(prompt(`Ingrese otro número`));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("<br>", 
    "Los resultados de las operaciones son: ",
    "Suma: ", suma, `<br>`,
    "Resta: ", resta, `<br>`,
    "Multipliación: ", mult, `<br>`,
    "División: ", div, `<br>`,
    "Residuo: ", residuo, `<br>`,
    "Potencia: ", potencia, `<br>`
);

console.log("Los resultados de las operaciones son: ",
    "Suma: ", suma,
    "Resta: ", resta, 
    "Multipliación: ", mult, 
    "División: ", div, 
    "Residuo: ", residuo, 
    "Potencia: ", potencia, 
);
