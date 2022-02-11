let e = prompt("Introduce el area del circulo");
let area = Math.PI*(e*e);

let j = document.getElementById('circulo');
j.setAttribute('r',area);