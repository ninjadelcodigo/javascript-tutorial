// definir variables (dos cadenas y un número)
const titulo = 'Mejores Lecturas del 2022';
const autor = 'Mario';
const likes = 30;

// forma de concatenación de cadenas
resultado = 'El blog llamado ' + titulo + ' por ' + autor + ' tiene ' + likes + ' likes';
console.log(resultado);

// usando plantialls de cadena (intro)
resultado = `El blog llamado ${titulo} por ${autor} tiene ${likes} liles`;
console.log(resultado);

// creando plantillas de html
let html = `
    <h2>${titulo}</h2>
    <p>Por ${autor}</p>
    <span>Este blog tiene ${likes} likes
`;
console.log(html);