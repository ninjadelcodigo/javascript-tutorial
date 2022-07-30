
// declaraciones if
const edad = 25;

if (edad > 25)  {
    console.log('edad es mayor que 25');
}

if (edad == 25)  {
    console.log('edad es exactmente 25');
}

// if dentro de arreglos
let ninjas = ['peach', 'mario', 'yoshi'];

if (ninjas.length > 3) {
    console.log('hay bastantes ninjas');
}

ninjas =  ['peach', 'mario', 'yoshi', 'luigi'];

if (ninjas.length > 3) {
    console.log('hay bastantes ninjas');
}

// usos más prácticos
let password = 'abcde';
if (password.length > 8) {
    console.log('el password es lo suficientemente largo');
}

// else
password = 'abcdefghij';
if (password.length > 8) {
    console.log('el password es lo suficientemente largo :)');
} else {
    console.log('el password no tiene la longitud deseada');
}

// else if
if (password.length > 8) {
    console.log('el password es lo suficientemente largo :)');
} else if (password.length == 8) {
    console.log('el password es exactamente largo');
}  else {
    console.log('el password no tiene la longitud deseada');
}

// else if (se pueden repetir las veces que se plazcan)
if (password.length > 8) {
    console.log('el password es lo suficientemente largo :)');
} else if (password.length == 8) {
    console.log('el password es exactamente de 8 caracteres');
} else if (password.length == 7) {
    console.log('el password es exactamente de 7 caracteres');
} else {
    console.log('el password no tiene la longitud deseada');
}