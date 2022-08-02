
// declaración de función
function saludar() {
    console.log('hola!');
}

// llamar una función declarada
saludar();
saludar();

// expresión de función  (notar el punto y coma al final de este bloque de código)
const despedirse = function() {
    console.log('adios!')
};

// llamar una función declarada
despedirse();
despedirse();
despedirse();

// esta dos formas son casi iguales con la diferencia que las funciones expresadas son izadas por JavaScript

hablar();
hablar();

function hablar() {
    console.log('hablando');
}

// nota: sin embardo, declarar una función después de llamarla es una mala práctica ya que se complica la lecura del código

// funciones con parametros
const hablarle = function(frase, persona)  {
    console.log(frase, persona);
}

// llamar a una función parametrizada
hablarle('hola', 'peach');
hablarle('adios', 'mario');
hablarle('hablando con', 'yoshi');

// error si el parametro de una función es llamado afuera de la función
// persona = 'peach';

// si no se pasan parametros los parametros asumen el valor 'Undefined'
hablarle(); 

// funcion con valores de parametros por definición
const decirle = function(frase = 'hello', persona = 'shaun')  {
    console.log(frase, persona);
}

// al llamar una funcion con parametros por defición los parametrós no pasados asumen los valores por definicion
decirle();
decirle('hola');
decirle('adios', 'peach');