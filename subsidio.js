/*Una entidad otorga subsidios de vivienda a sus empleados siempre y cuando cumplan con 
ciertos criterios. Si un empleado es de un estrato socio-económico menor al estrato  4 y 
tiene por lo menos 8 años de antigüedad en la entidad, entonces el empleado tiene 
derecho a un subsidio de vivienda, de lo contrario, no. Teniendo en cuenta las 
condiciones anteriores, cree en Javascript un programa que reciba por teclado el 
nombre del empleado, luego, que reciba su estrato socio-económico 
(debe estar ubicado entre 1 y 6), después, que reciba por teclado su antigüedad en años 
en la entidad y por último muestre si el empleado tiene derecho al subsidio o no.*/
let nombre = prompt("ingrese su nombre")
let estratoSocioEconomico = parseInt(prompt("ingrese su estrato entre(1-6)"))
let antiguedad = parseInt(prompt("ingrese su antiguedad en la empresa"))

    if (estratoSocioEconomico < 4 && antiguedad >= 8) {
        console.log(nombre + " usted tiene derecho al subsidio")

    }

    else {
        console.log(nombre + " usted no tiene derecho al subsidio")
    }