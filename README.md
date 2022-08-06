## JavaScript Moderno - Lección 25 (Métodos de objetos)

Añadir métodos a un objeto es similar a añadir una propiedad (par llave-valor)

* literales de objetos (como declarar un objeto)
* examinar el usuario creado en la consola del navegador
* invocar métodos de objeto
* usar 'blogs' no es posible (cuasa error) es necesario usar 'this'
* nota: 'this' implica el contexto de el código.  por ejemplo si se usa dentro de un documento se refiere al objeto global (a la ventana del navegador)
* luego se puede usar forEach dentro de this.blogs ya que es un método que le pertenece al objeto arreglo (Array)
* IMPORTANTE: notar que en logBlogs() no usamos una función flecha.  esto es intencional ya que al usar una función flecha, JS no le cambia el valor a 'this' al objeto
* sin embargo se puede emitir la palabra function y usar simplemente parentesis
* usando el objeto nuevo (mejorado)

importante recordar:
* no usar funciones flechas dentro de literales de objetos

la proxima lección veremos como manejar mejor arreglos dentro de objetos

**Link al curso traducido en YouTube:** [JavaScript Moderno](https://www.youtube.com/channel/UCuSHTq2yiCY5QBNoEXv8JpA/)

**Link al curso original en YouTube:** [Modern JavaScript](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)