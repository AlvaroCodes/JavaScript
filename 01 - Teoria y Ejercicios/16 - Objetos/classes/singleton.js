
// Instancia unica de la clase
// Misma instancia en todo la aplicacion
// Todas las instancias apuntan al mismo objeto en memoria

class Singleton {

    static instancia; // undefined
   

    constructor( nombre = '' ) {
   

        const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);

        // Si ya existe 
        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');


console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);

