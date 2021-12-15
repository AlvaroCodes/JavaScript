// document.write('<h2>Selecciona un color para el fondo de la pagina</h2><select id = "colores"><option value="yellow">Amarillo</option><option value="red">Rojo</option><option value="green">Verde</option><option value="blue">Azul</option></select><button onclick="cambiarColor()">Modificar el color</button>');


document.write('<h2>Selecciona un color para el fondo de la pagina</h2>');
document.write('<select id = "colores"><option value="yellow">Amarillo</option><option value="red">Rojo</option><option value="green">Verde</option><option value="blue">Azul</option></select>');
document.write('<button onclick="cambiarColor()">Modificar el color</button>')

const cambiarColor = () => document.bgColor = document.querySelector('#colores').value;