let personaje = {
    // Se recomienda que sea de manera alfabetica 

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