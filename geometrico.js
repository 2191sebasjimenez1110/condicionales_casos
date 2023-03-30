/*Dado un string que indica la figura geométrica y dos números, calcular el 
área correspondiente. Las figuras pueden ser "triangulo", 
"rectangulo" o "circulo".*/
let string = prompt("ingrese la figura geometrica");
    if (string == "triangulo"){
        let altura = parseFloat(prompt("ingrese la altura del triangulo"))
        let base = parseFloat(prompt("ingrese la base del triangulo"))
        console.log("el area del triangulo es",(base*altura)/2)
    }
    else{
        if (string == "circulo"){
            let radio= parseFloat(prompt("ingrese el radio del circulo"))
            console.log("el area del circulo es",3.14*radio**2)
    
        }
        else{
            if (string == "rectangulo"){
                let altura = parseFloat(prompt("ingrese la altura del rectangulo"))
                let base = parseFloat(prompt("ingrese la base del rectangulo"))
                console.log("el area del triangulo es",base*altura)
        
            }
        }
    }
   