// 5. Ejercicio 5: Validación de usuario y permisos
// Enunciado analítico:
// Un sistema debe validar si un usuario puede acceder y qué permisos posee según su rol.
// El programa recibirá los datos del usuario y evaluará si está activo y qué tipo de acceso
// corresponde a su rol.
// Requerimientos:
// • Crear una función validarUsuario().
// • Usar operadores lógicos y condicionales.
// • Evaluar roles: admin, editor y lector.
// • Retornar nivel de acceso.
// Entradas:
// • Nombre.
// • Estado (activo/inactivo).
// • Rol.
// Salidas:
// • Permisos asignados según el rol.
// • Mensaje de acceso permitido o denegado.


// Definición de la función validarUsuario
function validarUsuario(nombre, estado, rol) {

    // Verificar si el usuario está activo (lógica AND)
    if (estado !== "activo") {
        return {
        nombre: nombre,
        acceso: "denegado",
        mensaje: "Usuario inactivo.",
        permisos: []
        };
    }

    let permisos = [];
    let acceso = "permitido";

  // Evaluar roles y asignar permisos
    switch (rol) {
        case "admin":
        permisos = ["crear", "leer", "actualizar", "borrar"];
        break;
        case "editor":
        permisos = ["leer", "actualizar"];
        break;
        case "lector":
        permisos = ["leer"];
        break;
        default:
        acceso = "denegado";
        permisos = [];
        break;
    }

    return {
    nombre: nombre,
    acceso: acceso,
    mensaje: acceso === "permitido" ? "Acceso concedido" : "Rol no válido",
    permisos: permisos
    };
}

// Prueba del ejercicio 5
console.log(validarUsuario("Ana", "activo", "admin"));   // Acceso total
console.log(validarUsuario("Pedro", "activo", "lector")); // Acceso lector
console.log(validarUsuario("Luis", "inactivo", "admin")); // Acceso denegado (inactivo)
console.log(validarUsuario("Maria", "activo", "editor")); // Acceso editor
