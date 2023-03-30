/*Crear un programa en Javascript que verifique si un número es divisible por 3 y por 5 al
mismo tiempo. condicional*/

let num = parseFloat(prompt("ingrese un numero"))
    if (num%3 == 0 && num%5 == 0){
        console.log("su numero es divisible entre 3 y 5 a la vez");
    }

    else {
        console.log("su numero no es divisible entre 3 y 5 a la vez");
    }