
// No es posible llamar al objeto directamente
// Se ejecuta directamente, se autollama
// 
(() => {
    // Uso stricto de JavaScript 
    // Para quitar errores comunis y obliga a ser estricto 
    // Declarando variables, ... 
    
    'use strict'

    const personajes = ['Ana', 'Mercy','Mei'];
    console.log(personajes);

})();

/* 
(function(){

})()

*/


// Si retorna algo
const miModulo = (() => {
    // Uso stricto de JavaScript 
    // Para quitar errores comunis y obliga a ser estricto 
    // Declarando variables, ... 
    
    'use strict'

    const personajes = ['Ana', 'Mercy','Mei'];
    console.log(personajes);

    return personajes;

    // Puede devolver un objeto con metodos, atributos, ... 
    // Devolver funciones para ejecutar todo el programa ...
})();