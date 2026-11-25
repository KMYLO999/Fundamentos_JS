/* (POO) Programación Orientada a Objetos

La POO es un paradigma de programación que organiza el software en clases y objetos para modelar conceptos del mundo real. Este enfoque promueve la reutilización del código, modularidad y mejor organización del software.
*/

// Crear el Objeto Automovil

document.writeln(`Creacion de Objeto AUTOMOVIL <br>`);

var Auto = {
    marca: `Toyota`,
    modelo: `Corolla`,
    color: `Azul`,
    año: `2026`,
    combustible: `Diesel`,
    tipo: `Sedán`,
    radio: [`FM`, `MP4`, `USB`]
}

// Acceso a las propiedades: Se utiliza la notación de punto (Auto.marca) para acceder a las propiedades del objeto.

document.writeln(`Marca: ${Auto.marca}`, '<br>');
document.writeln('<br>');

document.writeln(`Clase de vehículo con objeto ferrari: <br>`);
document.writeln('<br>');

class Vehiculos {
    // Atributos 
    marca = `Toyota`;
    modelo = `Corolla`;
    color = `Azul`;
    año = `2026`;
    combustible = `Diesel`;
    tipo = `Sedán`;
    precio = '$78.285.000';

    // Métodos
    // Representan acciones o comportamientos en este caso del Vehículo
    acelerar(){
        return `El ${this.marca} acelera de 0 a 100 km/h en tan solo 3 segundos.`;
}
    frenar(){
        return `El ${this.marca} ${this.modelo} puede frenar de 100 km/h a 0 en tan solo 2.5 segundos.`
    }
}

// Crear un objeto basado en la Clase Vehiculos.
const ferrari = new Vehiculos();
// Se declara una constante, luego la palabra reservada NEW que significa que está creando una nueva instancia de tipo Objeto y al colocar el nombre de la clase, para este nuevo objeto tendrá a disposición los atributos y métodos de la clase previamente creada.

// Mostrar las propiedades y métodos del objeto ferrari.

document.writeln(`Marca: ${ferrari.marca} <br>`)
document.writeln(`Modelo: ${ferrari.modelo} <br>`)
document.writeln(`Color: ${ferrari.color} <br>`)
document.writeln(`Año: ${ferrari.año} <br>`)
document.writeln(`Combustible: ${ferrari.combustible} <br>`)
document.writeln(`Tipo: ${ferrari.tipo} <br>`)
document.writeln(`Precio: ${ferrari.precio} <br>`)

document.writeln('<br>');


// nombre, especie, habitat, sonido, 


document.writeln(`Clase de Animales con objeto pantera: <br>`);
document.writeln('<br>');

class Animal {
    // Atributos 
    nombre = `Pantera`;
    especie = `Panthera onca`;
    familia = `Felidos`;
    clase = `Mamífero`;
    habitat = `Selvas tropicales`;
    longevidad = `20 años`;
    velocidad = '80 km/h';

    // Métodos
    // Representan acciones o comportamientos en este caso del Vehículo
    Emboscada(){
        return `La ${this.nombre} aprovecha la vegetación y la poca luz de la selva para acercarse en silencio hasta quedar a pocos metros de su objetivo antes de saltar.`;
}
    Gruñido(){
        return `El ${this.nombre} ${this.clase} Utiliza gruñidos profundos y roncos para anunciar su presencia o atraer pareja a larga distancia.`
    }
}

// Crear un objeto basado en la Clase Animales.

const pantera = new Animal();
// Se declara una constante, luego la palabra reservada NEW que significa que está creando una nueva instancia de tipo Objeto y al colocar el nombre de la clase, para este nuevo objeto tendrá a disposición los atributos y métodos de la clase previamente creada.

// Mostrar las propiedades y métodos del objeto ferrari.

document.writeln(`Nombre: ${pantera.nombre} <br>`)
document.writeln(`Especie: ${pantera.especie} <br>`)
document.writeln(`Familia: ${pantera.familia} <br>`)
document.writeln(`Clase: ${pantera.clase} <br>`)
document.writeln(`Habitat: ${pantera.habitat} <br>`)
document.writeln(`Longevidad: ${pantera.longevidad} <br>`)
document.writeln(`Velocidad: ${pantera.velocidad} <br>`)
document.writeln(pantera.Emboscada(), `</br>`);
document.writeln(pantera.Gruñido(), `</br>`);

class Animales {

    rugir(){
        return `La ${this.nombre} aprovecha la vegetación y la poca luz de la selva para acercarse en silencio hasta quedar a pocos metros de su objetivo antes de saltar.`
        }
        
    cazar(){
        return `El ${this.nombre} ${this.especie} Utiliza gruñidos profundos y roncos para anunciar su presencia o atraer pareja a larga distancia.`
        }
}

// Objeto Pantera
const guepardo = new Animales
guepardo.nombre = "guepardo";
guepardo.especie = "Africano";
guepardo.habitat = "Sur Sahariano";
guepardo.velocidad = "112 km/h";
guepardo.sonido = "GRAWWWW";


document.writeln(`<h2>${guepardo.nombre}</h2>`);
document.writeln(`especie: ${guepardo.especie}<br>`)
document.writeln(`velocidad: ${guepardo.velocidad}<br>`)
document.writeln(`<br>===================================`);

/* Herencia - Subclases - Métodos */

class Deportistas {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportistas {
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this._goles = goles;
    }

    get goles(){
        return this._goles;
    }

    set goles(newGoals){
        this._goles = newGoals
    }
}

let futbolista2 = new Futbolista('Lionel', 'Messi', 5);


document.writeln(`<h2>Futbolista: </h2> `)
document.writeln("Nombre: ", futbolista2.nombre, "<br>");
document.writeln("Apellido: ", futbolista2.apellido, "<br>");
document.writeln("Goles: ", futbolista2.goles, "<br>");
