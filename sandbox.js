// ejemplo simple de arreglos
let ninjas = ['mario', 'toad', 'peach'];
console.log(ninjas);

// acceder valor de array usando indice
console.log(ninjas[1]);

// cambiar elemento de array
ninjas[1] = 'bowser';
console.log(ninjas);

// usar diferentes tipos en arreglo
let random = ['yoshi', 'luigi', 10 , 20];

// propiedades de arreglos
console.log(ninjas.length);

// métodos de arreglos 
let resultado = ninjas.join(",");
console.log(resultado);

resultado = ninjas.concat(random);
console.log(resultado);

// (el valor de ninjas sigue siendo el mismo)
console.log(ninjas);        

// métodos destructivos (cambian el valor original de variable)
ninjas.push('wario');
console.log(ninjas);

ninjas.pop('wario');
console.log(ninjas);

