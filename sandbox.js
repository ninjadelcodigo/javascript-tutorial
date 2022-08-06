// literales de objetos (como declarar un objeto con métodos)

let usuario = {
    nombre: 'claudia',
    email: 'claudia@ninjasdelcodigo.pe',
    edad: 28,
    ciudad: 'berlin',
    blogs: ['como cocincar panqueques', 'mi perro ladra mucho', 'aprendiendo a programar'],
    login: function() {
        console.log('usuairo ha iniciado su sesión')
    },
    logout: () => {
        console.log('usuairo ha cerrado su sesión')
    },
    logBlogs: function() {
        // console.log(blogs);   // causa error ya que blogs no es encontrado (se necesita 'this')

        console.log('usuario ha creado los siguientes blogs: ');
        this.blogs.forEach((titulo) => {
            console.log(' * ' + titulo);
        })

    },
    flecha: () => {
        console.log(this);
    }
};

// examinar el usuario creado en la consola del navegador
console.log(usuario);

// invocar métodos de objeto
usuario.login();

// esto es similar a un método de un objeto String (cadena)
let nombre = 'yoshi';
nombre.toUpperCase();

// invocar otro método (funcuón flecha) del objeto
usuario.logout();

// usar 'blogs' no es posible (cuasa error) es necesario usar 'this'
// usuario.logBlogs();

// nota: 'this' implica el contexto de el código.  por ejemplo si se usa dentro de un documento se refiere al objeto global (a la ventana del navegador)
console.log(this)

// luego se puede usar forEach dentro de this.blogs ya que es un método que le pertenece al objeto arreglo (Array)
usuario.logBlogs();

// IMPORTANTE: notar que en logBlogs() no usamos una función flecha.  esto es intencional ya que al usar una función flecha JS no le cambia el valor a this al objeto (ejemplo):
usuario.flecha();

// sin embargo se puede emitir la palabra function y usar simplemente parentesis
let usuarioNuevo = {
    nombre: 'yoshi',
    email: 'yoshi@ninjasdelcodigo.pe',
    edad: 22,
    ciudad: 'paris',
    blogs: ['como cocincar brownies', 'mi gato no ladra', 'aprendiendo a programar mejor'],
    login() {
        console.log(`usuairo ${this.nombre} ha iniciado su sesión`);
    },
    logout() {
        console.log(`usuairo ${this.nombre} ha cerrado su sesión`);
    },
    logBlogs() {
        console.log(`usuario ${this.nombre} ha creado los siguientes blogs: `);
        this.blogs.forEach(titulo => {
            console.log(' * ' + titulo);
        })
    }
};

console.log(usuarioNuevo);

// usando el objeto nuevo
usuarioNuevo.login();
usuarioNuevo.logBlogs();
usuarioNuevo.logout();

// la proxima lección veremos como manejar mejor arreglos dentro de objetos