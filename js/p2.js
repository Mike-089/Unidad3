let nombre = prompt("Cual es tu nombre?");
let edad = prompt("Cual es tu edad?");
let pais = prompt("Cual es tu pais de residencia?");
alert("Hola, cola " + nombre +". " + pais + " va a ser bombardeado, porfavor mudese");

let reg = prompt("Los datos son correctos?");

if(reg === "si"){
    alert("Registro guardado correctamente: Nombre: " + nombre + ", Edad: " + edad + ", País: " + pais);
}else{
    alert("Registros borrados");
}