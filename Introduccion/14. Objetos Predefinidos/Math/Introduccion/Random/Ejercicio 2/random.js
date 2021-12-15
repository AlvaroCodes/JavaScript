function generar (){
    let n1 = document.getElementById('numero1').value;
    let n2 = document.getElementById('numero2').value;
   
    n1 = parseInt(n1,10);
    n2 = parseInt(n2,10);

    if (n1 > n2){

        let resultado = Math.floor(Math.random() * (n1 - n2)) + n2;
        document.getElementById("resultado").innerHTML = resultado;
       
    } else {
       
        let resultado = Math.floor(Math.random() * (n2 - n1)) + n1;
        document.getElementById("resultado").innerHTML = resultado;
    }

    
}