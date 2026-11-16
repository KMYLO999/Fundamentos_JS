// ============================================================== //
// RETO - CELSIUS A FAHRENHEIT
// Leer los grados Celsius y mostrar su equivalente en Fahrenheit.
// Fórmula: F = C × 9 ÷ 5 + 32
// ============================================================== //

// Buscamos en HTML el input y la caja de resultado (por su id).
const inputCelsius = document.getElementById("gradosCelsius");
const cajaResultado = document.getElementById("resultado");

function grados() {
    // Si falta el dato no se calcula y se dice qué falta.
    if (inputCelsius.value === "") {
        cajaResultado.textContent = "Falta escribir los grados Celsius";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en número.
    const celsius = Number(inputCelsius.value);

    // Fórmula de conversión: F = C × 9 ÷ 5 + 32
    const fahrenheit = celsius * 9 / 5 + 32;

    // Mostrar el resultado en la página (máximo 2 decimales).
    cajaResultado.innerHTML =
    "Los grados Fahrenheit son: <b>" + fahrenheit + "</b>";  
}

// Cada vez que se escribe en el input, se vuelve a calcular.
inputCelsius.addEventListener("input", grados);

