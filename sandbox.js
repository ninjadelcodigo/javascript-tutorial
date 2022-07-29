// booleanos y comparaciones
console.log(true, false, "true", "false");

// los métodos pueden retornar booleanos (en cadenas)
let email = 'yoshi@ninjasdelcodigo.pe';
let resultado = email.includes('@');

console.log(resultado);

resultado = email.includes('1');
console.log(resultado);

// los métodos pueden retornar booleanos (en arreglos)
let arreglo = ['mario', 'luigi', 'toad'];
resultado = arreglo.includes('luigi');

console.log(resultado);

resultado = arreglo.includes('peach');
console.log(resultado);

// operadores de comparación (usar doble igual para comparar en vez de asignar)
let edad = 25;
console.log(edad == 25);
console.log(edad == 30);

// comparación 'diferente que'
console.log(edad != 25)
console.log(edad != 30)

// comparación 'mayor que' y 'menor que'
console.log(edad > 20);
console.log(edad < 30);

let nombre = 'shaun';
console.log(nombre == 'shaun');

console.log(nombre == 'Shaun');

// las minusculas son mayores que cualquier mayuscula (se comparan las letras en orden - la primera en el siguiente caso 's')
console.log(nombre > 'Shaun');
console.log(nombre > 'Cristal');

