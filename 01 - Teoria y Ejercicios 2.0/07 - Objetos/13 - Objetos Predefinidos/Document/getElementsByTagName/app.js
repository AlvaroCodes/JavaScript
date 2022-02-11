// Carrusel de imagenes, sin usar getElementsById

let a = document.getElementsByTagName('img');
console.log(a);
let contador = 0;


const imagenes = (contador) => {
    let imagenes = ['Spiderman', 'thor','What if'];

    if (contador == imagenes.length){
        contador = 0;
    }

    document.getElementsByTagName('img')[0].src = 'file:///C:/Users/AlvaroRamirezMartine/Desktop/Document/'+imagenes[contador]+'.jpg';
    contador++;
    return contador;
}