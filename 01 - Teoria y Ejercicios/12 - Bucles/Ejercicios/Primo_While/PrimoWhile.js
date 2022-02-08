function numeroPrimo (){

    let numero = document.getElementById('numeroPrimo').value;
    numero = Number.parseInt(numero);
    numero+=1;
    let salida = false;
    let indice = 1;

  while (salida == false){
    indice++;
      while (numero%indice == 0){
         if (numero == indice){
             salida = true;
             break;
         }else{
            indice = 1;
            numero++;
             break;
         }
      } 
  }
    alert(`El numero ${numero} es el siguiente primo`);
}