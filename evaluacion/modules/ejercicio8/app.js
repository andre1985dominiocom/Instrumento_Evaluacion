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


// Función para buscar cursos en el catálogo utilizando un callback
export function buscarCursos(catalogo, callback) {
    return catalogo.filter(callback);
}