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
export function validarUsuario(nombre, estado, rol) {

    // Verificar si el usuario está activo (lógica AND)
    if (estado !== "activo") {
        return {
        nombre: nombre,
        acceso: "denegado",
        mensaje: "Usuario inactivo.",
        permisos: []
        };
    }

    // Inicializar permisos y acceso
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

    // Retornar el resultado con el nombre, nivel de acceso, mensaje y permisos
    return {
    nombre: nombre,
    acceso: acceso,
    mensaje: acceso === "permitido" ? "Acceso concedido" : "Rol no válido",
    permisos: permisos
    };
}