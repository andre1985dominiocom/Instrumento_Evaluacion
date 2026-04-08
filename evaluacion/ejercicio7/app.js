// issues#9

// Enunciado analítico:
// Una aplicación desea permitir el registro de un número indefinido de productos sin duplicados. El programa debe almacenar los productos ingresados y evitar registros repetidos.

// Requerimientos:
// • Crear una función registrarProductos(...productos).
// • Usar parámetros rest.
// • Validar duplicados.
// • Retornar la lista final de productos.

// Entradas:
// • Múltiples nombres de productos.

// Salidas:
// • Lista de productos sin duplicados.

// importamos la funcion desde el barril.
import { registrarproductos } from './index.js';

// entradas: aqui enviamos muchos nombres sueltos gracias a los parametros rest.
const misproductos = registrarproductos(
    "arroz", 
    "aceite", 
    "ARROZ", 
    "leche", 
    "aceite", 
    "pan"
);

// salidas: mostramos la lista final en la consola.
console.log("registro de productos final (sin duplicados):");
console.log(misproductos);
