
// definir una función expresada que retorna un valor
const calcularArea = function(radio)  { 
    let area = 3.14 * radio**2;
    return area;
};

// llamar a la función expresada
let area = calcularArea(5);
console.log('area es: ' + area);

// definir una función expresada que retorna un valor sin usar una variable interna
const calcularAreaNueva = function(radio)  {
    return 3.14 * radio**2;
};


// invocar la nueva función expresada sin variable intermedia
area = calcularAreaNueva(5);
console.log('area es: ' + area);

// funciones flecha (arrow functions) son una forma más corta y limpia de expresar funciones
const calcularAreaFlecha = (radio) => {
    return 3.14 * radio**2;
}

// llamar la nueva función expresada (flecha)
area = calcularAreaFlecha(5);
console.log('area es: ' + area);

// simplificar función flecha (los parentesis no son necesarios cuando solo hay uno)
const calcularAreaFlechaReducida = radio => {
    return 3.14 * radio**2;
}

area = calcularAreaFlechaReducida(5);
console.log('area es: ' + area);

// cuando se retorna algo más simple se puede simplificar incluso más
const calcularAreaFlechaReducidaMas = radio =>  3.14 * radio**2;

area = calcularAreaFlechaReducidaMas(5);
console.log('area es: ' + area);

