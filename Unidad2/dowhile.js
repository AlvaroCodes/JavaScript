function numeroPrimo (){

    let numero = document.getElementById('numeroPrimo').value;
    let n = true;

        do {
            for (let i = 2; i<=numero; i++){
                if (numero%i == 0){
                    alert("No es primo");
                    numero++;
                } else {
                    alert("El "+ numero +" es primo");
                    n = false;
                    break;
                }
            }
        } while (n == true);
}