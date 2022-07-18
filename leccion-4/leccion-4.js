// strings (cadena de caracteres, o simplemente cadenas)
console.log("hola mundo");

let email = "mario@ninjasdelcodigo.pe";
console.log(email);

// strings concatenation (concetanezación de cadenas)
let primerNombre = "Mario";
let apellidoPaterno = "Gomez";

let nombreCompleto = primerNombre + ' ' + apellidoPaterno;
console.log(nombreCompleto);

// acceder a caracteres
console.log(nombreCompleto[3]);

// longitud de string
console.log(nombreCompleto.length);

// métodos de string
console.log(nombreCompleto.toUpperCase());

// slice method in string
let resultadoSlice = nombreCompleto.slice(0, 5);
console.log(resultadoSlice);

let resultadoSlice2 = nombreCompleto.slice(2, 5);
console.log(resultadoSlice2);

// substring method in string
let resultadoSubstring = nombreCompleto.substring(0, 5);
console.log(resultadoSubstring);

let resultadoSubstring2 = nombreCompleto.substring(6, 9);
console.log(resultadoSubstring2);

// reassing variable - use substring with start only (reasignar variable - usar substring con solo comienzo) 
resultadoSubstring = nombreCompleto.substring(6);
console.log(resultadoSubstring);

