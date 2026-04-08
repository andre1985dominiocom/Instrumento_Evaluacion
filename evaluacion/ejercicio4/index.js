// issues #6

// Enunciado analítico:
// Una empresa necesita organizar los precios de sus productos para analizarlos. El programa debe recibir los precios registrados, ordenarlos de mayor a menor y determinar cuál es el precio más alto y el más bajo.

// Requerimientos:
// • Usar un arreglo para almacenar los precios.
// • Emplear el método sort().
// • Crear una función que retorne el arreglo ordenado y los valores extremos.

// Entradas:
// • Cantidad de precios.
// • Cada precio.

// Salidas:
// • Arreglo ordenado.
// • Precio más alto y más bajo.

// aqui es donde ejecutamos todo.
// importamos desde el index.js (nuestro barril).

import { organizarprecios } from './funciones.js';

// entradas: definimos cuantos precios hay y la lista.
const cantidad = 5;
const preciosregistrados = [1500, 300, 4500, 100, 2200];

// verificamos que la cantidad coincida y procesamos.
const resultado = organizarprecios(preciosregistrados);

// salidas: mostramos los resultados en consola.
console.log("lista de precios ordenados:", resultado.ordenados );
console.log("el precio mas caro es:", resultado.alto);
console.log("el precio mas barato es:", resultado.bajo);


