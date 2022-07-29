let puntaje = '100';
console.log(puntaje);

// conversión a Number
puntaje = Number(puntaje);
console.log(puntaje);

// intentar convertir una cadena no númerica a un Number (NaN / No es un Número)
let resultado = Number('hola');
console.log(resultado);

resultado = String(50);
console.log(resultado);

// valores truthy (verdaderin) y falsy (falsin)
resultado = Boolean(100);   // truthy
console.log(resultado);

resultado = Boolean(0);   // falsy
console.log(resultado);

resultado = Boolean(-1);   // falsy
console.log(resultado);

// typeof (tipo de)
console.log(resultado, typeof(resultado));

let resultadoCadena = 'hola';
console.log(resultadoCadena, typeof(resultadoCadena));

// * Nota:  estas conversiónes han sido explictas.  también existen conversiones implicitas que vermos luego
