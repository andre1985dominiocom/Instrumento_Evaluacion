// archivo barril: importa el módulo 
import { validarAsistencia } from "./app.js";

// Entradas simuladas
const cantidad = 3;
const aprendices = ["Ana", "Luis", "María"];
const nombreValidar = "Luis";

// Uso de la función
const resultado = validarAsistencia(aprendices, nombreValidar);

// Salida
console.log("=== Ejercicio 1: Validación de asistencia ===");
console.log(`Cantidad de aprendices: ${cantidad}`);
console.log(`Lista: ${aprendices.join(", ")}`);
console.log(`Nombre a validar: ${nombreValidar}`);
console.log(resultado);
