
// https://caniuse.com/mdn-javascript_classes_private_class_fields
class Rectangulo {

    // Para poner propiedades privadas se pone #
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    // Metodos se pondria # delante.
    calgularArea() {
        console.log( this.#area * 2 );
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area  = 100;
rectangulo.calgularArea();

console.log(rectangulo);



