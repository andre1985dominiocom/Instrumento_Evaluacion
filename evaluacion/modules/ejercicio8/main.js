// importamos la función buscarCursos desde el archivo index.js
import { buscarCursos } from "./index.js";

// Ejercicio 8: Búsqueda avanzada en un catálogo usando callbacks
// Se crea un catálogo de cursos como ejemplo
const catalogo = [
    { nombre: "Curso de Programación en JavaScript", categoria: "Programación", duracion: 120 },
    { nombre: "Curso de Diseño Gráfico", categoria: "Diseño", duracion: 60 },
    { nombre: "Curso de Programación en Python", categoria: "Programación", duracion: 90 },
    { nombre: "Curso de Marketing Digital", categoria: "Marketing", duracion: 45 },
    { nombre: "Curso de Diseño Web", categoria: "Diseño", duracion: 80 }
];

// Callback para filtrar cursos de programación
const criterioProgramacion = curso => curso.categoria === "Programación";

// Callback para filtrar cursos con duración mayor a 80 horas
const criterioDuracion = curso => curso.duracion > 80;

// Callback para filtrar cursos que contienen "Diseño" en el nombre
const criterioNombre = curso => curso.nombre.includes("Diseño");

const criterioVacio = curso => curso.categoria === "" || curso.nombre === "" || curso.duracion === 0;

// Probar la función buscarCursos con los diferentes criterios
console.log(buscarCursos(catalogo, criterioProgramacion)); // Filtra cursos de programación
console.log(buscarCursos(catalogo, criterioDuracion)); // Filtra cursos con duración mayor a 80 horas
console.log(buscarCursos(catalogo, criterioNombre)); // Filtra cursos que contienen "Diseño" en el nombre
console.log(buscarCursos(catalogo, criterioVacio)); // Filtra cursos vacios