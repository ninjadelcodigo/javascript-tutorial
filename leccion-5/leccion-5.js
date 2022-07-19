// variable y constants
let radio = 10;
const pi = 3.14;

console.log(radio, pi);

// math operators +, -, *, /, **, %
console.log(10 /  2);

let resultado = radio % 3;
console.log(resultado);

let area = pi * radio**2;
console.log(area);

// orden de operadores  B I D M A S  (P I D M S R)
let matematicas = 5 * (10-3)**2; 
console.log(matematicas);

// sum and rest to a variable
let puntos = 7;
puntos = puntos + 1;  // suma un punto
console.log(puntos);
puntos++;   // suma un punto (más corto)
console.log(puntos);

puntos = 7;
puntos = puntos - 1;
console.log(puntos);
puntos--;
console.log(puntos);

puntos = 10;
puntos = 10 + 2;
console.log(puntos);

puntos = 10;
puntos += 2;
console.log(puntos);

// NaN (Not a Number) (No es Número)
console.log(10 / 'hello');
console.log(5 * 'hello');

let likes = 50;
let concat = 'El blog tiene ' + likes + ' likes';
console.log(concat);