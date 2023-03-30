/*Crea un programa que muestre un menú con varias opciones y permita al usuario
seleccionar una de ellas. Utiliza switch para ejecutar una acción diferente en función de la
opción seleccionada por el usuario.*/

let num1 = parseFloat(prompt("ingrese el numero 1"));
let num2 = parseFloat(prompt("ingrese el numero 2"));
let opcion;

  console.log("MENU DE OPCIONES");
  console.log("1. suma");
  console.log("2. resta");
  console.log("3. division");
  console.log("4. division");
  console.log("5. Salir");

  opcion = parseInt(prompt("Seleccione una opción: "));

switch (opcion) {
    case 1: 
        let sum = num1 + num2;
        console.log("el resultado de la suma es:", sum);
        break;
    case 2:
        let rest = num1 - num2;
        console.log("el resultado de la resta es:", rest);
        break;
    case 3:
        let div = num1/num2;
        console.log("el resultado de la division es:", div);
        break;
    case 4:
            let mul = num1*num2;
            console.log("el resultado de la multiplicacion es:", mul)
        break;
 
    default:
        console.log("Opción inválida. Seleccione una opción del menú.")
        break;
    }
