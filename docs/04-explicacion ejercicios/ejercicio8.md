## Analisis del problema

*Entradas
    La función buscarCursos recibe dos parámetros (catálogo y callback)
    El catálogo tiene un arreglo de objetos y cada objeto representa un curso con propiedades como
    nombre, categoría y duración
    Se realiza un retorno para el catálogo y se filtra el callback debe devolver true si se cumple
    el criterio o false sino no cumple el criterio

*Proceso
    Iteración: El método recorre cada elemento del arreglo catalogo uno por uno
    Ejecución del Callback: Para cada elemento, se invoca la función callback pasando el curso actual como argumento
    Si el callback retorna true, el curso se guarda en una nueva lista temporal
    Si retorna false, el curso se ignora

*Salida
    La lista de cursos filtrados

## Justificación

*La abstracción y reutilización de la función buscarCursos es genérica. No importa si busca por nombre o por duración; solo sabe filtrar. Esto evita tener que escribir una función diferente para cada tipo de búsqueda.