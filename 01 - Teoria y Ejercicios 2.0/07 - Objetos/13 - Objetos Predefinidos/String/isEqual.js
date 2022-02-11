let a= "Hola soy juan";
let a2 = "hola soy juan";


let x = isqual(a, a2, true);
alert(x);

function isqual(s1 , s2, caseIgnore){
    if (caseIgnore == true){

        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();

        if (s1 == s2){
            return 0;
        }else if (s1 > s2){
            return -1;
        }else {
            return 1;
        }

    }else {
        if (s1 == s2){
            return 0;
        }else if (s1 > s2){
            return -1;
        }else {
            return 1;
        }

    }
}
