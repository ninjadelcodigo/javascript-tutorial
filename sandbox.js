// literales de objetos (como declarar un objeto)

let usuario = {
    nombre: 'claudia',
    email: 'claudia@ninjasdelcodigo.pe',
    edad: 28,
    ciudad: 'berlin',
    blogs: ['como cocincar panqueques', 'mi perro ladra mucho', 'aprendiendo a programar']
};

// examinar el usuario creado en la consola del navegador
console.log(usuario);
// nota: la usuario 'claudia' tiene una propiedad importante llamada 'prototype' o 'proto' que examinaremos luego

// mostrar la edad del usuario
console.log(usuario.edad);

// mostrar el nombre del usuario
console.log(usuario.nombre);

// cambiar la propiedad 'edad' del usuario
usuario.edad = 30;
console.log(usuario.edad);

// también se puede usar paréntesis cuadrados para cambiar un valor de una propiedad de un objeto
usuario['edad'] = 32;
console.log(usuario.edad);

// la máyoria del tiempo es más claro usar la 'notación punto' (usuario) pero los parentesis sirven cuando el nombre de la propiedad es variable
let llave = 'email';
console.log(usuario[llave]);

// es posible añadir una nueva propiedad despues de haber declarado el objeto
usuario.pais = 'alemania';
console.log(usuario);

// después de 4 años clauda y tiene pais :)

// la siguiente lección describirá como añadir métodos a un objeto
