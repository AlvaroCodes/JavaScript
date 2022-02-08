/*
function crearPersona (nombre, apellido){
    return {
        nombre:nombre, 
        apellido: apellido
    }
} */

// Abreviar esta funcion 
 // Objetos -> Cuando el nombre es igual a la propiedad a devolver
 // Parentensis para indicar que es un objeto no cuerpo de funcion
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Alvaro','Ramirez');
console.log(persona);

function imprimeArgumentos (){
    console.log(arguments);
}


// La funcion flecha no funcionia arguments no lo crea solo tradicionales
// Para resolver esto, escribir arguments o args en parametros (solo devuelve el primero)
// poniendo ... (parametro res) crea un arreglo con cada uno de ellos
// Detras de res no puede ir ningun argumento
const imprimeArgumentos2 = (...args) => {
    // console.log(arguments);
    return args;
}

// Dar variables a cada argumentos
let [saludo,edad,posicion,otraPosicion,nombre] = imprimeArgumentos2('Hola mundo',10,4,1,'Juan');
console.log({saludo,edad,posicion,otraPosicion,nombre});

// Para coger por el nombre de una propiedad
const {apellido: nuevoApellido} = crearPersona('Alvaro','Ramirez');
console.log(nuevoApellido);


// Destructuracion de argumentos
let personaje = {
    // En la consola se pone de manera alfabetica

    nombre: 'Tony Strak', 
    codeName: 'Ironman', 
    vivo: false,
    // edad: 40,
    trajes:['Mark I','Mark V','Hulkbuster']
};

// Darle valor por defento evitar undefinet
const imprimePropiedades = ({nombre,codeName,vivo,edad = 15,trajes}) => {
 console.log(edad);
}
