
const grado = 'D';

// usar switch para chequear el valor de la variable 'grado'
switch (grado) {
    case 'A':
        console.log('sacaste una A!!!');
        break;
    case 'B':
        console.log('sacaste una B!!');
        break;
    case 'C':
        console.log('sacaste una C!');
        break;
    case 'D':
        console.log('sacaste una D');
        break;
    default:
        console.log('el grado no es válido');
        break; 
}

// modificar la viable 'grado' para obtener el caso ('case') diferente
// Nota: las verificacioness de los case son suceptibles grado = 10 es diferente a grado = '10'

// usar switch(true) para ver rangos de enteros en un switch 
let nota = 80;
switch (true) {
    case nota > 75 && nota <= 100:
        console.log('pasaste el examen con una excelente nota');
        break;
    case (nota > 50 && nota <= 75):
        console.log('pasaste el examen');
        break;
    case (nota >= 0 && nota <= 50):
        console.log('no pasaste el exámen');
        break;
    default:
        console.log('tu nota no es valida');
        break; 
}

// modificar la viable 'nota' para obtener el caso ('case') diferente