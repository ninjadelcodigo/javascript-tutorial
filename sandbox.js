
// operaciones lógicas - OR || y  AND &&
//let password = 'passw@rd;
let password = 'passw@rd12345';

if (password.length >= 12 && password.includes('@')) {
      console.log('la contraseña es bastante fuerte :)');
} else if (password.length >= 8 || password.includes('@')) {
    console.log('la contraseña es lo suficientemente fuerte');
} else {
    console.log('la contraseña no es lo suficientemente fuerte');
}

// se puede usar las diferentes operaciones lógicas OR y AND juntas
password = 'pas@';

if (password.length >= 12 && password.includes('@')) {
      console.log('la contraseña es bastante fuerte :)');
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('la contraseña es lo suficientemente fuerte');
} else {
    console.log('la contraseña no es lo suficientemente fuerte');
}

// logical NOT (!) - invierte el valor booleano de la variable
let ingresado = false;

if (!ingresado)  {
    console.log('el usuario debe iniciar sesión');
}

// cambiar valores de variables 'password' e 'ingresado' para ver diferentes caminos lógicos