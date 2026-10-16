//factorial

const n = 5;


console.log ("CICLO DO-WHILE");

    let i = 1;
    let factorialDoW = 1;
   
do {
    factorialDoW *= i;
    i++;
} while (i <= n) 
console.log("El factorial de 5 es: ", factorialDoW);