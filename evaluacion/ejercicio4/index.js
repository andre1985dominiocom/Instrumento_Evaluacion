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

//exportamos la funcion para poder trabajr en modulos
//creamos un function para organizar los precios, el cual recibe un parametro llamado precio
export function organizarPrecio(precio) {
  
  //creamos uns constante que se llama ordenar, el cual recibe un argumento llamdo precio, y se utiliza 
  //el metodo sort
  const ordenar = precio.sort((a, b) => b - a);

  const precioAlto = ordenar[0];
  const precioBajo = ordenar[ordenar.length - 1];

  return {
    ordenar,
    precioAlto,
    precioBajo
  };

}