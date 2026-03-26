// 2. Ejercicio 2: Actualización de inventario en tienda digital
// Enunciado analítico:
// Una tienda en línea requiere conocer el inventario actualizado de un producto. Se debe
// calcular el inventario final según la cantidad inicial, las unidades vendidas y las unidades
// recibidas en reposición. Además, se debe identificar si el inventario queda en estado crítico.
// Requerimientos:
// • Crear una función calcularInventario().
// • Usar operadores matemáticos.
// • Validar valores negativos con condicionales.
// • Indicar si el inventario es crítico (menor a 5 unidades).
// Entradas solicitadas por el programa:
// • Cantidad inicial.
// • Cantidad vendida.
// • Cantidad recibida.
// Salidas:
// • Inventario final.
// • Mensaje “Inventario crítico” o “Inventario estable”.

function calcularInventario(inicial, vendidos, recibidos) {

    // 1. Validar que no haya valores negativos en las entradas
    if (inicial < 0 || vendidos < 0 || recibidos < 0) {
        return "Error: Los valores no pueden ser negativos.";
    }

    // 2. Cálculo matemático
    let inventarioFinal = inicial - vendidos + recibidos;

    // Validar que el resultado no sea negativo (más ventas que stock)
    if (inventarioFinal < 0) {
        return "Error: Las ventas superan el inventario disponible.";
    }

    // 3. Evaluar estado crítico (< 5)
    let estado = inventarioFinal < 5 ? "Inventario crítico" : "Inventario estable";

    return `Inventario Final: ${inventarioFinal} unidades - ${estado}`;
}

// 
console.log(calcularInventario(10, 7, 3)); 
console.log(calcularInventario(10, 8, 2)); 