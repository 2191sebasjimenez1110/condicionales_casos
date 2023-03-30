/*  Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. */ 
let num = parseInt("ingrese un numero entre 1-15")

    if (num >=1 && num<=15) {
        if (num==2 || num==3 || num==5 || num==7 || num==11 || num==13){
            console.log("el numero es primo")
        }
        else{
            console.log("el numero no es primo");
        }
    }
    else{
        console.log("ingrese un numero valido por favor");
    }