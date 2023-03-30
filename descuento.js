alert ("ingrese el precio de un producto");
let producto = parseFloat(prompt());

let descuento = 0.10;
let valorDes = producto*descuento;
let valorFinal = producto-valorDes;
console.log("el valor final del producto con descuento es",valorFinal);