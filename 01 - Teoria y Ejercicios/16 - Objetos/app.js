let personaje = {
    // En la consola se pone de manera alfabetica

    nombre: 'Tony Strak', 
    codeName: 'Ironman', 
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes:['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California' 
    },
    // Entre comillas para decir que es un string, sino se interpresa
    // que lo que queremos es restar
    'Ultima-pelicula': 'Infinity War'
};

console.log(personaje);
// Formas de adquirir los valores.
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);

// Se puede utilizar metodos 
console.log('No. Trajes', personaje.trajes.length); 

// Se tiene que poner asi ya que con . el menos lo interpresa como si fuera una resta
console.log(personaje['Ultima-pelicula']);


///******************************************* 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

///******************************************* 
// --> Metodos y otros

delete personaje.edad; // Borrar una propiedad
console.log(personaje);

// personaje.casado = true;

const entriesPares = Object.entries(personaje); // Transformar un objeto en un array
console.log(entriesPares); // No aparece en order alfabetico

Object.freeze(personaje); // Congela el objeto y no deja cambiar propiedas ni incluir nuevas
personaje.dinero = 10000000000;
// NO BLOEQUEA LOS OBJETOS QUE ESTAN DENTRO DEL OBJETO
// personaje.direccion.ubicacion = "Costa Rica"

const propiedades = Object.getOwnPropertyNames(personaje); // Array de propiedades
const valores = Object.values(personaje); // Array de propiedades
console.log({propiedades, valores});


