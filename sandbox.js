// acceder el elemento 'personas' (ul) del documento HTML
const ul = document.querySelector('.personas');

// crear un arreglo llamado personas dentro de JavaScript
const personas = ['peach', 'yoshi', 'mario', 'luigi', 'bowser'];

// crear una plantilla de HTML vacía
let html = ``;

// iterar por cada persona y crear un elemento de HTML <li> por persona y una cadena de <li>s para insertar a HTML
personas.forEach(function(persona) {
    html += `<li style="color:blue">${persona}</li>`;
});

console.log(html);

// poner HTML creado dentro de la página HTML (dentro del element ul)
ul.innerHTML = html;


// resetear contenido de HTML
html = ``;
ul.innerHTML = html;

// convertir a versión flecha
personas.forEach( persona => {
    html += `<li style="color:purple">${persona}</li>`;
});

console.log(html);

// volver a poner HTML dentro de la página HTML (dentro del element ul)
ul.innerHTML = html;
