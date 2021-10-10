function numeroPrimo (){

    let numero = document.getElementById('numeroPrimo').value;
    let salida = false;

    do{
        for (let i = 2; i<=numero; i++){
            if (numero%i == 0){
                break;
            }else {
                salida = true;
            }
        }
        numero ++;
    }while(salida == false);
        
    alert(`El numero ${numero} es el siguiente primo`);
}