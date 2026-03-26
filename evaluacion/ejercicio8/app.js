// 8. Ejercicio 8: Búsqueda avanzada en un catálogo usando callbacks
// Enunciado analítico:
// Un catálogo de cursos necesita un sistema flexible de búsqueda que permita filtrar según
// diferentes criterios definidos por un callback (categoría, duración o coincidencia en el nombre).
// Requerimientos:
// • Crear una función buscarCursos(catalogo, callback).
// • El callback debe definir el criterio de búsqueda.
// • Aplicar filter() con el callback.
// • Retornar los cursos encontrados.
// Entradas:
// • Cantidad de cursos.
// • Datos de cada curso.
// • Criterio definido mediante callback.
// Salidas:
// • Lista de cursos filtrados.

import { buscarCursos } from "./evaluacion/index.js";

// Función principal que usa el callback para filtrar
function buscarCursos(catalogo, callback) {
    return catalogo.filter(callback);
};

// Definir el nombre, la categoría y la duración
const cursos = [
    { nombre: "JavaScript Pro", categoria: "Programación", duracion: 40 },
    { nombre: "Diseño UI", categoria: "Diseño", duracion: 20 },
    { nombre: "Node.js Backend", categoria: "Programación", duracion: 50 },
    { nombre: "React Avanzado", categoria: "Programación", duracion: 35 }
];

// 1. Filtrar por Categoría
const porCategoria = buscarCursos(cursos, (c) => c.categoria === "Programación");

// 2. Filtrar por Duración (más de 30 horas)
const porDuracion = buscarCursos(cursos, (c) => c.duracion > 30);

// 3. Filtrar por Coincidencia de Nombre
const porNombre = buscarCursos(cursos, (c) => c.nombre.includes("React"));

console.log("Por Categoría:", porCategoria);
console.log("Cursos Largos:", porDuracion);
console.log("Búsqueda 'React':", porNombre);