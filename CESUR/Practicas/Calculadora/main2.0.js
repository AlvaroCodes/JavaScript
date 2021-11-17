var numero1 = "";
var numero2 = "";
var operador = "";
var resultadoTotal = 0;

if (resultadoTotal == 0){
    document.getElementById('total').innerHTML = resultadoTotal;
}


// ==> Generales <== //
function tamaño(){
    let longitud = document.getElementById('total').innerHTML;
   
    if (longitud.length>=6 && document.getElementById('total').innerHTML != "No has asignado ningun operador"){
        document.getElementById('total').setAttribute("class","h2Pequeño");
    } 
    
    if (longitud.length>=11 && document.getElementById('total').innerHTML != "No has asignado ningun operador"){
        document.getElementById('total').setAttribute("class","h2Pequeño2");
    }
}

function segundaOperacio (){
    if (resultadoTotal!=0 && operador == ""){
        borrar();
    }
}

function resultado(){

    if (operador == ""){
        document.getElementById('total').innerHTML = "0";
    } else {
       
        switch (operador){
            case "+":

                if (resultadoTotal == 0){
                    console.log(numero1);

                    resultadoTotal = sumar(numero1,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }else {
                    resultadoTotal = sumar(resultadoTotal,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }

                
            
            break;
            case "-":


                if (resultadoTotal == 0){
                    resultadoTotal = restar(numero1,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }else {
                    resultadoTotal = restar(resultadoTotal,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }
                
            break;
            case "/":

                if (resultadoTotal == 0){
                    resultadoTotal = dividir(numero1,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }else {
                    resultadoTotal = dividir(resultadoTotal,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }
                
            break;
            case "x":
                if (resultadoTotal == 0){
                    resultadoTotal = multiplicar(numero1,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }else {
                    resultadoTotal = multiplicar(resultadoTotal,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }
                
            break;

            case "%":
                if (resultadoTotal == 0){
                    resultadoTotal = modulo(numero1,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }else {
                    resultadoTotal = modulo(resultadoTotal,numero2);
                    document.getElementById('total').innerHTML = resultadoTotal;
                    borrarVariables();
                }
                
            break;
        }
        tamaño();
    }
  
}


function asignarValor (numero){
    if (operador == ""){
        numero1 += numero;
    } else {
        numero2 += numero;
    }
}

function borrarVariables (){
    numero1 = "";
    numero2 = "";
    operador = "";
}


// ==> Operaciones <== //
function sumar (n1, n2){
    

    n1 = Number(n1);
    n2 = Number (n2);

    return n1 + n2;
}

function restar (n1, n2){
    n1 = Number(n1);
    n2 = Number (n2);

    return n1 - n2; 
}

function multiplicar (n1, n2){
    n1 = Number(n1);
    n2 = Number (n2);

    return n1 * n2; 
}

function dividir (n1, n2){
    n1 = Number(n1);
    n2 = Number (n2);

    return n1/n2;
}

function modulo (n1, n2){
    n1 = Number(n1);
    n2 = Number (n2);

    return n1%n2;
}



// ====> Botones <===== //
// Boton 1
function getValor_n1(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 1;
    asignarValor (1);
}

// Boton 2
function getValor_n2(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

  
    document.getElementById('total').innerHTML+= 2;
    asignarValor (2);
}

// Boton 3
function getValor_n3(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 3;
    asignarValor (3);
}

// Boton 4

function getValor_n4(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 4;
    asignarValor (4);
}

// Boton 5
function getValor_n5(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 5;
    asignarValor (5);
}

// Boton 6
function getValor_n6(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 6;
    asignarValor (6);
}

// Boton 7
function getValor_n7(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 7;
    asignarValor (7);
}

// Boton 8
function getValor_n8(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

  
    document.getElementById('total').innerHTML+= 8;
    asignarValor (8);
}

// Boton 9
function getValor_n9(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    
    document.getElementById('total').innerHTML+= 9;
    asignarValor (9);
}

// Boton 0
function getValor_n0(){
    tamaño();
    segundaOperacio ();

    if (document.getElementById('total').innerHTML == "0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= 0;
    asignarValor (0);
}

// Boton /
function getValor_dividir(){
    tamaño();
    document.getElementById('total').innerHTML+= '/';
    operador = '/';
}

// Boton x
function getValor_multiplicar(){
    tamaño();
    document.getElementById('total').innerHTML+= 'x';
    operador = 'x';
}

// Boton +
function getValor_sumar(){
    tamaño();
    document.getElementById('total').innerHTML+= '+';
    operador = '+';
}

// Boton -
function getValor_restar(){
    tamaño();
    document.getElementById('total').innerHTML+= '-';
    operador = '-';
}

// Boton %
function getValor_modulo(){
    tamaño();
    document.getElementById('total').innerHTML+= '%';
    operador = '%';
}


// Boton AC
function borrar(){
    resultadoTotal = 0;
    document.getElementById('total').innerHTML = resultadoTotal;
    numero1 = "";
    numero2 = "";
    operador = "";
    
}

// Boton +/-
function valorNegativo () {
    if (operador){

        if (numero2.indexOf("-") == -1){
            numero2 = "-"+numero2;
            document.getElementById('total').innerHTML= numero1 + operador + numero2;
        }
    }else {

        if (numero1.indexOf("-") == -1){
            numero1 = "-"+numero1;
            document.getElementById('total').innerHTML = numero1;
        }
    }
}

// Boton ,
function ponerComa () {
    if (operador){

        if (numero2.indexOf(".") == -1){
            numero2 = numero2+".";
            document.getElementById('total').innerHTML= numero1 + operador + numero2;
        }
    }else {

        if (numero1.indexOf(".") == -1){
            numero1 = numero1+".";
            document.getElementById('total').innerHTML = numero1;
        }
    }
}


