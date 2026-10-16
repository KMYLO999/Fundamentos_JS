// Equilatero = Los tres lado iguales
// Isóceles = Con alguno de los lados iguales
// Escaleno = Todos los lados son diferentes

const ladoA = 5;
const ladoB = 5;
const ladoC = 8;

// Primero validamos que ningún lado sea cero o negativo
if (ladoA <= 0 || ladoB <= 0) {
    console.log("Los lados deben ser mayores que cero");
    // "||" Esto es el operador "ó" Basta con que una de las condiciones se cumpla.
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    // Regla geométrica: La suma de los lados simpre debe ser mayor que el tercer lado.
    // Sino, no se puede formar un triángulo real.
    console.log("Los valores no forman un triángulo válido")
}
else if (ladoA === ladoB && ladoB === ladoC) {
    // "&&" Es el operador "Y".
    // Las condiciones evaluadas deben ser verdaderas.
    console.log("El triángulo es equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    // Si no es Equilátero, pero al menos dos de los lados coinciden
    // El triángulo es Isóceles
    console.log("El trángulo es Isóceles");
} else {
    // Si no se cumplen ninguna de las condiciones anteriores
    // Es decir que todos los lados son distintos.
    console.log("El triángulo es Escaleno")
}
