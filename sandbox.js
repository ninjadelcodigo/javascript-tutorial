let edad = 25;

// comparación suelta (diferentes tipos aún pueden ser iguales)
console.log(edad == 25);
console.log(edad == '25');    // true

// comparación suelta (diferentes tipos no pueden ser iguales)
console.log(edad === 25);
console.log(edad === '25');   // false

// más ejemplos (sueltas)
console.log(edad != 25);        
console.log(edad != '25');    // true    

// mucho mejor (estrictas)
console.log(edad !== 25)
console.log(edad !== 30)
console.log(edad !== '25')    // true
