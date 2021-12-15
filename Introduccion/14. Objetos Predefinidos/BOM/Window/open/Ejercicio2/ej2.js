let ventana;
const abrirVentana = () => {
    let win = window.open("", "My New Window", "width=700, height=300");
    win.document.write("<h1>Hola Mundo!</h1>");
    win.document.write('<button onclick="opener.close()">Cerrar Padre</button>');
    return win;
}

const cerrarVentana = (win) => {
    document.getElementById('parrafo').innerText = "Nueva Cerrada";
    win.close();
}