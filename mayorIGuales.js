/*Cree un programa que reciba dos números y muestre el mayor.
En caso de que los números sean iguales también se debe mostrar 
al usuario.*/ 

let num1 = parseInt(prompt("ingrese el numero 1"));
let num2 = parseInt(prompt("ingrese el numero 2"));

    if(num1 == num2){
        console.log("los numeros ingresados son iguales");
    }
    else{
        if(num1 >= num2){
            console.log(num1 + " es mayor que el numero " + num2);
        }
        else{
            console.log(num2 + "es mayor que el numero" + num1);
        }
    }