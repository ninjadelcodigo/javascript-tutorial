
// definir una función expresada que retorna un valor (versión larga)
const calcularCuentaLarga = function(productos, impuesto)  {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total += productos[i] * impuesto;
    }
    return total;
};

// invocar la función calucarCuenta dentro de console.log()
console.log('la cuenta es: ' + calcularCuentaLarga([10, 15, 30], 0.2));

// definir una función expresada que retorna un valor (versión flecha)
const calcularCuenta = (productos, impuesto) => {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total += productos[i] * impuesto;
    }
    return total;
};

// invocar la función calucarCuenta usando parametros con varaiables defindas y guardar resultado en variable
let productos = [10, 15, 30];
let impuesto = 0.2

let cuenta = calcularCuenta(productos, impuesto);

console.log('la cuenta es: ' + cuenta);

// nota:  durante este curso usaremos mayormente las funciones flecha.  sin emgarbo, hay algunas desventajas en hacerlo que explicaré luego