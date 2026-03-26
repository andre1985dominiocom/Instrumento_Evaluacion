// Ejercicio 1: Validación de asistencia en un curso
// Enunciado analítico:
// Un instructor desea verificar la asistencia de sus aprendices a una sesión. Para ello
// dispone de una lista de estudiantes inscritos y necesita validar si un nombre ingresado por
// el usuario corresponde a un aprendiz registrado. El programa debe confirmar la asistencia
// o reportar que el aprendiz no está inscrito.
// Requerimientos:
// • Usar un arreglo donde se almacenen los nombres de los aprendices.
// • Aplicar un método de búsqueda (find, includes o filter).
// • Crear una función que reciba el arreglo y el nombre a validar.
// • Retornar si el aprendiz está inscrito o no.
// Entradas solicitadas por el programa:
// • Cantidad de aprendices.
// • Nombre de cada aprendiz.
// • Nombre a validar.
// Salidas:
// • Mensaje indicando si el aprendiz está inscrito o no.

//  Módulo de lógica: Se encarga exclusivamente del procesamiento de datos.

// Exportamos la función para que el archivo 'index.js' pueda importarla y usarla
export function validarAsistencia(aprendices, nombre) {
    
  
    // estructura de control utilizando: if / else
    //  se utiliza para decidir que mensaje retornar basandonos en una condicion booleana.
    
    // el meodo .includes() verifica si el 'nombre' existe dentro del arreglo 'aprendices'.
    // si el resultado es verdadero (true), entra al primer bloque:
    if (aprendices.includes(nombre)) {
        
        // retorna el mensaje de éxito y finaliza la ejecución de la función.
        return `el aprendiz ${nombre} está inscrito.`;
    } 
    
    // si la condición del 'if' no se cumple (es decir, el nombre no está en la lista):
    else {
        
        // retorna el mensaje de error indicando que no se encontró el registro.
        return `el aprendiz ${nombre} NO está inscrito.`;
    }
}


