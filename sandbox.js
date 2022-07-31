
// arreglo de enteros
const resultados = [50, 25, 0, 30, 100, 20, 10, 10];

// usar 'break' para dejar de iterar por los resultados
for (let i = 0; i < resultados.length; i++) {

    console.log('el resultado es: ', resultados[i]);

    if (resultados[i] == 100) {
        console.log('¡felicitaciones! obeniste el resultado más alto');
        break;
    }
}

// usar 'continue' para ignorar el código dentro del bloque de código y continuar con la siguiente iteración
for (let i = 0; i < resultados.length; i++) {

    if (resultados[i] == 0) {
        continue;
    }
    console.log('el resultado es: ', resultados[i]);

    if (resultados[i] == 100) {
        console.log('¡felicitaciones! obeniste el resultado más alto');
        break;
    }
}