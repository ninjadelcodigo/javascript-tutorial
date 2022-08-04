// callbacks & foreach  
const miFunc = (callbackFunc) => {
    let valor = 50;
    callbackFunc(valor);
};

// invocar miFunc pasandole una callback función (retrollamada)
miFunc(function(valor) {
    console.log(valor);
});

// forma redicida
miFunc(valor => {
    console.log(valor);
});

// crear un arreglo de personas
let personajes = ['peach', 'mario', 'yoshi', 'luigi', 'wario', 'bowser'];

// método forEach con una retrollamada
personajes.forEach(function(personaje) {
    console.log(personaje);    
});

// método forEach con una retrollamada con función flecha
personajes.forEach(personaje => {
    console.log(personaje);
});

// método forEach con una retrollamada con función flecha con dos parametros (el segundo parametro es un iterador del loop por definición)
personajes.forEach((personaje, indice) => {
    console.log(personaje, indice);
});

// crear una función ha ser retrollamada por seaparado
const logPersona = (personaje, indice) => {
    console.log(`hola ${personaje} tu indice es ${indice}`);
}

// invocar la funcion callback logPersona() dentro de forEach()
personajes.forEach(logPersona)
