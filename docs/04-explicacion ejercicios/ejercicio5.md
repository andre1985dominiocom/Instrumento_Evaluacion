## Analisis del problema

*Entradas
    Se define la función validarUsuario
    Se definen los parámetros de la función (nombre, estado y rol)
    
*Proceso
    Validación de Estado: Se realiza un control de flujo mediante un condicional if. Si el estado es distinto a activo, se ejecuta un retorno temprano, deteniendo cualquier otra evaluación
    Asignación de Permisos: Si el usuario está activo, se entra en una estructura de control switch. Esta evalúa el valor de la variable contra casos específicos para determinar qué privilegios asignar al arreglo permisos
    Manejo de Excepciones: El caso default del switch gestiona roles no reconocidos, marcando el acceso como denegado
    Construcción de Respuesta: Se utiliza un operador ternario para definir el mensaje final de forma concisa

*Salida
    Permisos asignados según el rol
    Mensaje de acceso permitido o denegado

## Justificación

*La legibilidad con el uso de switch en lugar de múltiples if/else anidados hace que la gestión de roles sea mucho más fácil de leer y mantener.
La seguridad al validar primero el estado, el sistema ahorra recursos y evita procesar permisos para usuarios que ya se sabe que no deben entrar.
La escalabilidad si en el futuro se necesita agregar un rol de nuevo, solo se debe añadir un nuevo case al switch sin alterar el resto de la lógica.
La consistencia al devolver siempre un objeto con la misma estructura, facilita que otras partes de la aplicación consuman esta función sin errores.