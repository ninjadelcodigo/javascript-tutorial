
let radio = 10;
const pi = 3.14;

console.log(radio, pi);



// template strings (plantillas de cadenas)
const titulo = 'Mejores Lecturas del 2022';
const autor = 'Mario';
const likes = 30;

// concatenation way (forma de concatenación)
// let resultado = 'El blog llamado ' + titulo + ' por ' + autor + ' tiene ' + likes + ' likes';
// console.log(resultado);

// template string way (forma de plantilla de cadena)
let resultado = `El blog llamado ${titulo} por ${autor} tiene ${likes} liles`;
console.log(resultado);

// creating html templates (creando plantillas de html)
let html = `
    <h2>${titulo}</h2>
    <p>Por ${autor}</p>
    <span>Este blog tiene ${likes} likes
`;
console.log(html);