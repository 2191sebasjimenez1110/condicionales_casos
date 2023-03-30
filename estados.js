/*Crea una aplicación que tenga varios estados y permita al usuario cambiar entre ellos.
Utiliza switch para cambiar el estado actual de la aplicación y ejecutar diferentes acciones en
función del estado actual. Por ejemplo, si la aplicación está en modo "edición", permite al
usuario editar los datos, pero si está en modo "visualización", muestra los datos sin permitir
la edición */

let estado = prompt("ingrese su estado de (editor o lector)")

switch (estado) {
    case editor:
        console.log("usted puede editar y manipular la web");
        break;
    case lector:
        console.log("usted solo podra visualizar la web e interactuar con ella mas no editarla");
        break;

    default:
        console.log("ingrese una opcion valida");
        break;
}