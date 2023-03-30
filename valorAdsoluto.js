alert ("ingrese un numero")
let num= parseFloat(prompt())

    if(num<0){
        let mul= num*(-1)
        console.log("el valor adsoluto del numero",num,"es",mul)
    }
    else{
        console.log("el valor adsoluto del numero",num,"es",num)
    }