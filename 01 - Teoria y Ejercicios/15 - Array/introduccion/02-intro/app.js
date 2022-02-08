/*
// Forma poco tradicional, 10 posiciones
const arr = new Array (10);

// Forma tradicional
const arr1 = [];
*/

let videojuegos = ['Mario 3', 'Pagman','Chrono Trigger'];
console.log({videojuegos}); // Asi imprime mas informacion del array
console.log(videojuegos[0]); // Primera posicion

let array = [
    true, // Boolean
    0, // Number
    'Chrono Trigger', // String 
    2+1,  // Operaciones
    function(){},  // Funciones
    ()=>{}, // Funcion flecha
    {a:1}, // Objeto
    ['Mario 3', 'Pagman','Chrono Trigger']
    ];

// Entrar en un array de arrays
console.log(array[7][3]);


// ******************************************************
// ******************************************************
// --> Metodos

let videojuegos = ['Mario 3', 'Pagman','Chrono Trigger'];

console.log(videojuegos.length); // Tamaño del array

videojuegos.forEach((elemento,indice,arr) =>{ // ForEach 
    console.log({elemento,indice,arr});
});

videojuegos.push('F-Zero'); // Incluir al final del array
console.log({videojuegos});

videojuegos.unshift('Fire Emblem'); // Incluir delate del array
console.log({videojuegos});

let juegoBorrado = videojuegos.pop(); // Borrar elementos
console.log({videojuegos});


let juegosBorrados = videojuegos.splice(pos,2); // Eliminar elementos y devuelve un array
console.log({videojuegos});
console.log({juegosBorrados});

let encontrar = videojuegos.indexOf('Pagman') // Encontrar valor en el array
console.log(encontrar);