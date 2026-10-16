// Calcular  la ganancia del vendedor. 
// Sumar la ganancia del valor del vehículo = precio venta
// Calcular el impuesto (6%) sobre el precio de venta.
// Sumar el precio de venta + el impuesto = costo total

// Valores definidos directamente por el enunciado del taller.
const valorVehiculo = 35000000; // Valor base del automovil
const porcentajeGanancia = 12;
const porcentajeImpuesto = 6;

// PASO 1: Calcular cuanto dinero gana el vendedor.
const gananciaVendedor = (valorVehiculo * porcentajeGanancia) / 100;

// PASO 2: El precio de venta es el valor del vehículo más la ganancia
const precioVenta = valorVehiculo + gananciaVendedor;

// PASO 3: Calcular el impuesto sobre el precio de venta (No sobre el vehículo)
const impuestoVenta = (precioVenta * porcentajeImpuesto) / 100;

// PASO 4: El costo total para el comprador es el precioo de venta + impuesto
const costoTotal = (precioVenta + impuestoVenta)

console.log("Valor del vehículo: $", valorVehiculo);
console.log("Porcentaje de ganancia: ", porcentajeGanancia, "%");
console.log("Ganancia del vendedor: $", gananciaVendedor);
console.log("Precio de venta antes de Impuestos: $", precioVenta);
console.log("Porcentaje de Impuestos: ", porcentajeImpuesto, "%");
console.log("Impuesto sobre venta: $", impuestoVenta);
console.log("Costo Total: $", costoTotal);