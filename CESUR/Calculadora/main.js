

var numero1 = "";
var numero2 = "";
var operador = "";

function resultado(){
      
    switch (operador){
        case "+":
            document.getElementById('total').innerHTML = sumar(numero1,numero2);
        break;
        case "-":
            document.getElementById('total').innerHTML = restar(numero1,numero2);
        break;
        case "/":
            document.getElementById('total').innerHTML = dividir(numero1,numero2);
        break;
        case "x":
            document.getElementById('total').innerHTML = multiplicar(numero1,numero2);
        break;
    }
        
}


function sumar (n1, n2){
    n1 = parseInt(n1,10);
    n2 = parseInt(n2,10);

    return n1 + n2;
}

function restar (n1, n2){
    n1 = parseInt(n1,10);
    n2 = parseInt(n2,10);

    return n1 - n2; 
}

function multiplicar (n1, n2){
    n1 = parseInt(n1,10);
    n2 = parseInt(n2,10);

    return n1 * n2; 
}

function dividir (n1, n2){
    n1 = parseInt(n1,10);
    n2 = parseInt(n2,10);

    return n1/n2;
}





// Existe alguna forma de reducir esto, ??
// codigo repetido

function asignarValor (numero){
    if (operador == ""){
        numero1 += numero;
    } else {
        numero2 += numero;
    }
}

function asignarOperador (ope){
    if (operador == ""){
        operador = ope;
    }else {
        document.getElementById('total').innerHTML = "Solo se puede realizar una operacion";
    }
}

function getValor_n1(){
    let valor = document.getElementById('uno').value;
   
    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n2(){
    let valor = document.getElementById('dos').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n3(){
    let valor = document.getElementById('tres').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
    
}

function getValor_n4(){
    let valor = document.getElementById('cuatro').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);

}

function getValor_n5(){
    let valor = document.getElementById('cinco').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n6(){
    let valor = document.getElementById('seis').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n7(){
    let valor = document.getElementById('siete').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n8(){
    let valor = document.getElementById('ocho').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n9(){
    let valor = document.getElementById('nueve').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_n0(){
    let valor = document.getElementById('cero').value;

    valor = valor.trim();

    if (document.getElementById('total').innerHTML =="0"){
        document.getElementById('total').innerHTML = "";
    }

    document.getElementById('total').innerHTML+= valor;

    asignarValor (valor);
}

function getValor_dividir(){
    let valor = document.getElementById('Dividir').value;

    valor = valor.trim();
    
    document.getElementById('total').innerHTML+= valor;

    asignarOperador (valor);
}

function getValor_multiplicar(){
    let valor = document.getElementById('Multiplicar').value;

    valor = valor.trim();

    document.getElementById('total').innerHTML+= valor;

    asignarOperador (valor);
}

function getValor_sumar(){
    let valor = document.getElementById('Sumar').value;

    valor = valor.trim();

    document.getElementById('total').innerHTML+= valor;

    asignarOperador (valor);
}

function getValor_restar(){
    let valor = document.getElementById('Restar').value;

    valor = valor.trim();

    document.getElementById('total').innerHTML+= valor;

    asignarOperador (valor);
}

function borrar(){
    document.getElementById('total').innerHTML = "0";
    numero1 = "";
    numero2 = "";
    operador = "";
}

