function verNumero (){
    let a = document.getElementById("texto").value;
    if (isNaN(a)){
        alert("No es un numero");
    }else{
        (a >= 18)? alert("Es mayor de edad"):alert("Es menor de edad");
    }
}
