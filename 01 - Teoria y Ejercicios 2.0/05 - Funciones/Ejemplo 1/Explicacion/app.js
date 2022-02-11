// ** Formas de declarar funciones **
// Funcion Normal
function saludar(nombre){
    console.log(arguments); // Hace referencia a los arguemtos pasados por parametros
    console.log('Hola Mundo, me llamo '+nombre);

    return 1; // Devuelve este valor, terminando la funcion
    console.log('Soy un codigo que nunca sera ejecutado');
}

// Uno de los problemas de utilizar var ... 
// var saludar = 123;

// Funcion Anonima
// No es posible la reutilizacion 
const saludar2 = function (nombre){
    console.log('Hola Mundo, me llamo '+nombre);
}

// Funciones de flecha 
const saludarFlecha = (nombre) => {
    console.log('Hola Mundo, me llamo '+nombre);
}
/*
const sumar2 = (a,b) => {
    return a + b;
} 
*/
// Funcion de fleca abreviada 
const sumar2 = (a,b) => a + b;

let retorno = saludar('Alvaro');
console.log(retorno);

saludar2('Alvaro');
saludarFlecha('Alvaro');