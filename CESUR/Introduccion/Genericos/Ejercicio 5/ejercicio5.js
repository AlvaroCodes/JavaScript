// imprime todos los números primos hasta el 23
/*
Dirección normal
for(let i = 1; i<=23; i++){
    if (esPrimo(i)){
        document.write(i+" ")
    }
}
*/
for(let i = 23; i>=1; i--){
    if (esPrimo(i)){
        document.write(i+" ")
    }
}


function esPrimo(numero){
    for (var i = 2; i < numero; i++) {
        if (numero%i==0){
            return false;
        }
    }
    return true;
}