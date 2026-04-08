
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


// este archivo contiene la funcion que filtra los productos.
// usamos ...productos (parametros rest) para recibir cualquier cantidad de nombres.

export function registrarproductos(...productos) {
    // creamos un arreglo vacio para guardar los productos que no se repitan.
    const listalimpia = [];

    // recorremos cada producto que recibimos.
    productos.forEach(nombre => {
        // convertimos a minusculas para que "papas" y "PAPAS" se consideren iguales.
        const nombreminuscula = nombre.toLowerCase();

        // validamos: si el producto no esta en nuestra lista limpia, lo agregamos.
        if (!listalimpia.includes(nombreminuscula)) {
            listalimpia.push(nombreminuscula);
        }
    });

    // retornamos la lista final sin duplicados.
    return listalimpia;
}
