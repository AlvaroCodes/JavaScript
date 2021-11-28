
// Es un problema, metodos duplicados 
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        // Si pones solo nombre no sirve, no esta en el mismo nivel
        // hacer referencia con this 
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }
}

const melissa = {
    nombre: 'Melissa',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }
}


// fher.imprimir();

// Metodo constructor -- Ya no es estandar por que es necesario 
// saber que se crea con la palabra new, documentacion ...

// Ok esto se debe de crear con la palabra new
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad   = edad;   

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }

}

const maria   = new Persona('María', 18);
const melissa2 = new Persona('Melissa', 35);
// console.log( maria );
maria.imprimir();
melissa2.imprimir();

