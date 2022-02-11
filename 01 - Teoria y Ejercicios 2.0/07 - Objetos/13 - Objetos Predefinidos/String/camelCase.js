var frase = prompt("Introduce una frase");
var primera = frase.charAt(0).toLowerCase();
var resto="";
var finalresto="";

for (var i = 1; i < frase.length; i++) {

  if (frase.charAt(i) == " ") {

    resto = frase.charAt(i + 1).toUpperCase();

    i++;

  } else {

    resto = frase.charAt(i);

  }

  var finalresto=finalresto+resto;

}

var nueva = primera + finalresto;

alert(nueva);

