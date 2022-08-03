
const nombre = 'peach';

// revisar una función flecha reducida
const saludar = (nombre) => 'hola, '  + nombre;

// las funciones son invocadas usando doble paréntisis ()
// invocar una función sin usar la noticación punto 
let resultadoUno = saludar(nombre);
console.log(resultadoUno);

// los métoods son funciones que le pertenecen a objetos 
// invocar un método con la notación  punto 
let resultadoDos = nombre.toUpperCase();
console.log(resultadoDos);