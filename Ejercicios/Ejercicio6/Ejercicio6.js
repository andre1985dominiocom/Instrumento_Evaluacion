//creo una funcion principal en donde se va a ejecutar todo y se solicitan datos
function ejecutarNomina () {
    //datos de entrada
    const valorHora = parseFloat(prompt("ingrese el valor de la hora de trabajo: "))
    const horasTrabajadas = parseFloat(prompt("ingrese el numero de horas trabajadas: "))

    if (typeof valorHora !== 'number' || typeof horasTrabajadas !== 'number') {
        alert("ingrese datos numericos validos")
        return;
    }

    //aca guardamos los resultados de las funciones en otras variables  
    const base = calcularSalarioBase(valorHora, horasTrabajadas);
    const descuentos = calcularDeducciones(base);
    const neto = calcularNeto(base, descuentos)

    //imprimimos por pantalla   
    alert(`----pago----\n +
        salario base: $${base.toLocaleString()}\n +
        deducciones (8%): $${descuentos.toLocaleString()}\n +
        salario Neto: $${neto.toLocaleString()}`);
}

//funcion para calcular el salario base y retornamos el resultado
function calcularSalarioBase(vHora, cantHoras) {
    return vHora * cantHoras;
}

//funcion que calcula el total de descuentos
function calcularDeducciones(salarioBruto) {
    const porcentajeDeduccion = 0.08
    return salarioBruto * porcentajeDeduccion;
}
//funcion que realiza la resta final para imprimir el salario real o final
function calcularNeto (base, deducciones) {
    //retorna la diferencia entre los resultados de los módulos anteriores
    return base -deducciones
}

