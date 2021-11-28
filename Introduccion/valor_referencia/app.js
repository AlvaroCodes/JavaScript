let a = 10;
let b = a;
a = 30;

// Para ver los valores de las variables junto con el nombre de
// la variable
console.log({a, b});


// Valores por Referencia 
// Todos los objetos tienen referencia 
let juan = {nombre:'Juan'};
let ana = {...juan}; // Para hacer una copia se puede utilizar {...}
ana.nombre = 'Ana';
console.log({juan,ana})

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'}; 
let tony = cambiarNombre(peter);

console.log({peter,tony});

// Arreglos 
// Por referencia Cuidado!!!!
const frutas = ['Manzana', 'Pera', 'Pinia'];
const otrasFrutas = [...frutas]; // Para los arrays se usa [...] (spread)
// const otrasFrutas = frutas.slice(); Otra forma de hacerlo 

// Spread lo hace mas rapido que slice.


otrasFrutas.push('Mango');

console.log({frutas, otrasFrutas});