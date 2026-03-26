function iniciarAnalisis() {
    //aca pedimos cuantas notas se van a ingresar
    let cantidadNotas = parseInt(prompt("Cuantas notas desea ingresar?"))
    //creamos un array que almacene las notas a ingresar
    let notas = []

    //validamos que la cantidad de notas sea de dato numerico y mayor que 0
    if (typeof cantidadNotas !== 'number' || cantidadNotas <= 0) {
        alert("ingrese un numero valido de notas")
        return;
    }

    //recorremos la cantidad de notas para solicitar ese mismo numero de notas y almacernar las notas en notas
    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt("ingrese la nota número " + i+1))
        notas.push(nota)
    }

    //llamamos a la funcion de calculo y almacenamos en resultado
    let resultado = calcularPromedio(notas)
    //mostramos la salida final
    alert(`reporte final: \npromedio: ${resultado.promedio.toFixed(2)}\nrendimiento: ${resultado.rendimiento}`)
}

//utilizo una funcion de calcular promedio para hallar el promedio y hacer otros pasos dentro de esta
function calcularPromedio(arregloNotas) {
    //variable donde se van a almacenar la suma de los items del arreglo
    let suma = 0
    //utilizamos el for para recorrer el arreglo de notas y sumar cada iteracion de items a la vrble suma 
    for (let i = 0; i < arregloNotas.length; i++) {
        suma += arregloNotas[i] 
    }

    let promedio = suma / arregloNotas.length
    //rendimiento vacio que puede variar segun las notas
    let rendimiento = ""

    //condicionales para determinar el rendimiento del estudiante
    if (promedio >= 4.0) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }


    //retorno por medio de un objeto en la función la informacion necesaria que solicita el ejercicio
    return {
        promedio : promedio,
        rendimiento : rendimiento
    }
}