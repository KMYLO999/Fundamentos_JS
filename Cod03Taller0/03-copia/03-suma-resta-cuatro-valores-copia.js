// ============================================================== //
// EJERCICIO 3 - SUMAR 4 VALORES Y RESTAR EL ÚLTIMO
// Leer 4 valores, sumarlos y a la suma restarle el último valor.
// ============================================================== //

// Buscamos en HTML los 4 inputs y la caja de resultado (por su id).
const inputPrimero = document.getElementById("primerValor");
const inputSegundo = document.getElementById("segundoValor");
const inputTercero = document.getElementById("tercerValor");
const inputCuarto = document.getElementById("cuartoValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algún valor no se calcula.
    if (inputPrimero.value === "" || inputSegundo.value === "") {
        cajaResultado.textContent = "Escribe los 2 valores";
        return;
    }
    
    // Lo que se escribe en un input es texto: Number() lo convierte en número.
    const primerValor = Number(inputPrimero.value);
    const segundoValor = Number(inputSegundo.value);


    // Sumar los 2 valores
    const sumaValores = Number("10") + Number("20");


    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Suma de los 2 valores: <b>" + sumaValores + "</b><br>" ;
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular.
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
inputCuarto.addEventListener("input", calcular);