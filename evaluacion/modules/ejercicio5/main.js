// Importar la función validarUsuario desde el archivo index.js
import { validarUsuario } from "./index.js";

// Prueba del ejercicio 5
console.log(validarUsuario("Ana", "activo", "admin"));   // Acceso total
console.log(validarUsuario("Pedro", "activo", "lector")); // Acceso lector
console.log(validarUsuario("Luis", "inactivo", "admin")); // Acceso denegado (inactivo)
console.log(validarUsuario("Maria", "activo", "editor")); // Acceso editor