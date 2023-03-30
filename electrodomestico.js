/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente compra a crédito, el
valor global del electrodoméstico aumenta en un 25%. Cree un programa que lea del usuario el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre al usuario el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico. */
let medioPago = prompt("ingrese el medio de pago");
let precio = parseFloat(prompt("ingrese el precio del producto"));
let cuota = parseInt(prompt("ingrese la cantidad de coutas"));

let aumento = precio*1.25;

let precioCuota = aumento/cuota;   

    if(medioPago == "credito"){
        console.log("el valor que debera pagar por las cuotas es:",precioCuota)
    }

    else{
        console.log("el precio que debera pagar es:",precio)
    }
