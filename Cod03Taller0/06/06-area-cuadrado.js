// ============================================================== //
// EJERCICIO 6 - AREA DE UN CUADRADO
// Leer el valor del lado de un cuadrado y calcular su área.
// ============================================================== //

// Buscamos los elementos del HTML.
const inputLado = document.getElementById("lado");
const cajaResultado = document.getElementById("resultado");

// Función para calcular el área del cuadrado.
function areaCuadrado(lado) {
        // Si falta algún valor no se calcula.
    if (inputLado.value === "") {
        cajaResultado.textContent = "Escribe el valor del lado";
        return;
    }

    // Convertir el valor a número.
    const valorLado = Number(inputLado.value);

    // Multiplicar lado por lado para obtener el área.
    const areaCuadrado = valorLado * valorLado;


    // Mostrar el resultado en HTML.
    cajaResultado.innerHTML =
        "Área del cuadrado: <b>" + areaCuadrado + "</b>";

}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular.
inputLado.addEventListener("input", areaCuadrado);

