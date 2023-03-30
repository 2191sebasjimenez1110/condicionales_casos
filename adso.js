/*Crear un programa en Javascript que verifique si una cadena de texto contiene la palabra
"ADSO" y la palabra "desarrolladores" en ella. */

let palabra = prompt("ingrese un texto")

    if(palabra.includes("ADSO") && palabra.includes("desarrollador")){
        console.log("incluye las palabras");
    }

    else{
        console.log("no incluye las palabras");
    }
    