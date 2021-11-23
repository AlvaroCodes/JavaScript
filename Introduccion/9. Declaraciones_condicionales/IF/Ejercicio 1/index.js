
function anoBisiesto (){
    let a = prompt("Introduce un año");

    if (a%400 == 0){
        alert("Es bisiesto");
    }else {
        if (a%4 == 0 && a%100 != 0){
            alert("Es bisiesto");
        }else{
            alert("No es bisiesto");
        }
    }
}