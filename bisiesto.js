/*Crear un programa rama en Javascript que verifique si un año es bisiesto. Un año es
bisiesto si es divisible por 4 y no es divisible por 100, o si es divisible por 400.*/

let anio = parseInt(prompt("ingrese el año"))

    if(anio%4 == 0 && anio%100 != 0 || anio%400 == 0){
      
            console.log("es un año bisiesto")
        
    }
    else{
       
            console.log("no es un año bisiesto")
        
    }