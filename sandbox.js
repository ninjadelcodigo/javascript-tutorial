
// como hemos visto se puede re-definir las variables en un bloque de codigo

let age = 25;

// error:
//let age = 30;

// ok
age = 30;
if (true) {
    let age = 40;
    let name = 'peach';
    console.log('dentro del 1er bloque de codigo', age, name);
} 

console.log('fuera del bloque de codigo', age, name);

// bloques de código anidados
if (true) {
    let age = 40;
    let name = 'peach';
    console.log('dentro del 1er bloque de codigo', age, name);
    if (true) {
        let age = 50;
        let name = 'yoshi';
        console.log('dentro del 2do bloque de codigo', age, name);

    }
} 

console.log('fuera del bloque de codigo', age, name);

// Nota: los bloques de código y su alcance en lo que concierne puede ser confusa (repetir lección para entenderlo bien)

