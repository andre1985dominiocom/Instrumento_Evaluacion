

// issues #6
// este archivo guarda la funcion.
// usamos export para que otros archivos puedan usar esta logica.

export function organizarprecios(listadeprecios) {
    // usamos el metodo sort para ordenar.
    // (a, b) => b - a sirve para que los numeros se ordenen de mayor a menor.
    const ordenados = listadeprecios.sort((a, b) => b - a);

    // el precio mas alto siempre sera el primero del arreglo ordenado.
    const alto = ordenados[0];

  // el precio mas bajo siempre sera el ultimo del arreglo.
  // -1 para encontrar el utlimo numero en la posicion real 
    const bajo = ordenados[ordenados.length - 1];

    // devolvemos los tres datos que nos pide el ejercicio.
    return { ordenados, alto, bajo };
}
