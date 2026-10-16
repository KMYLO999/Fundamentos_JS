const n = 5

console.log ("CICLO WHILE");

let factorialWhile = 1;
let i = 1
while (i <= n) {
    factorialWhile *= i;
    i++;
}

console.log("El factorial de 5 es: ", factorialWhile);