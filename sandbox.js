
// bucles for (declaración simple usa tres condiciones)
for (let i = 0; i < 5; i++) {
    console.log('en bucle for', i);
}

console.log('bucle ha terminado');

// cuando no sabemos cuando terminar (bucle sobre data o arreglo de tamaño desconocido)
let nombres = ['peach', 'mario', 'luigi'];

// usamos el indice/contador del bucle para acceder al arreglo usando paréntesis cuadrados []
for (let i = 0; i < nombres.length; i++) {
    console.log(i, nombres[i]);
}

// así tambien podemos crear pequeños templates (platillas) de HTML
for (let i = 0; i < nombres.length; i++) {
    let html = `<div>${nombres[i]}</div>`;
    console.log(html);
}

// bucles while (usa una sola condicion pero la variable usada debe existir como 'condicion')
let i = 0;

// bucle infinito (evitar esto)
// while (i < 5) {

// }

// bucle while equivalente al primer bucle al comienzo de este archivo
while (i < 5) {
    console.log('en bucle while', i);
    i++;
}

console.log('bucle while terminado');

// bucles do while
let j = 3;
do {
    console.log('valor de j es:', j)
    j++;

} while(j < 5)

console.log('bucle do while terminado');
