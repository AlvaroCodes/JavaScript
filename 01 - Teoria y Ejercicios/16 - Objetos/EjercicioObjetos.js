

const Gato = {
    nombre: 'Juan',
    edad: 5, 
    color: 'Blanco'
}

const Perro = {
    nombre: 'Pepe',
    edad: 3, 
    color: 'Marron'
}

const Pinguino = {
    nombre: 'Rodolfo',
    edad: 9, 
    color: ['blanco', 'Negro']
}

const Canario = {
    nombre: 'Mudito',
    edad: 3, 
    color: ['Naranja', 'Verde']
}

const Caballo = {
    nombre: 'Manuel',
    edad: 10, 
    color:'Negro'
}

const burro = {...Caballo};
burro.nombre = 'Burrito';
burro.edad = '12';
burro.color = 'gris';
console.log(burro)

const animales = [Gato, Perro, Pinguino, Canario, Caballo];

const nuevosAnimales = animales.map((objt)=>{
    let x = Math.round(Math.random() * 10);
    return {...objt, altura:x};
});

console.log(nuevosAnimales);

const animales2 = [...animales, {
    nombre:'pepito',
    edad: 3,
    color: 'Rojo'
}]

console.log(animales2);

const useContext = ({nombre, edad, color, altura = 0}) => {
    return ({
        nombreObjeto: nombre,
        alturaObjeto: altura,
        edad, // No hace falta, ya que comparten el mismo nombre
        otros: {
            id: 2342,
            tel: 92921
        }
    })
}

const nuevoAnimal = useContext(animales[0]);
console.log(nuevoAnimal);

const {alturaObjeto, nombreObjeto:nombre} = useContext(animales[0]);
console.log(` altura: ${alturaObjeto} nombre: ${nombre}`);


const {otros:{id, tel}} = useContext(animales[0]);
console.log(` idAnimal: ${id} telefono:${tel}`);
