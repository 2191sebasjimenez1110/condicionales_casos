/*En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos*/

let producto = prompt("ingre el nombre del producto")

    if(producto=="arroz" || producto=="lentejas"){
        alert("el producto no paga IVA")
    }
    else { if (producto=="vino" || producto=="crema"){
        alert("el producto paga IVA")
        }
    }