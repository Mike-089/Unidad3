function recolectarDatos() {
    alert("Bienvenido. Vamos a recolectar tus datos.");
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?");
    let pais = prompt("¿Cuál es tu país de residencia?");
    return { nombre, edad, pais }; 
}

function confirmarDatos(datos) {
    let mensaje = `Estos son tus datos:\nNombre: ${datos.nombre}\nEdad: ${datos.edad}\nPaís: ${datos.pais}`;
    let confirmacion = confirm(mensaje + "\n¿Son correctos? ");
    return confirmacion; 
}


function mostrarMensajeFinal(datosCorrectos) {
    if (datosCorrectos) {
        alert("¡Gracias por confirmar tus datos! Registro completado.");
    } else {
        alert("Datos descartados. Vuelve a intentarlo.");
    }
}


function saludarPorPais(datos) {
    alert(`¡Hola, ${datos.nombre}! Espero que estés disfrutando tu estancia en ${datos.pais}.`);
}



let datos = recolectarDatos(); 
let datosCorrectos = confirmarDatos(datos); 
mostrarMensajeFinal(datosCorrectos); 
if (datosCorrectos) {
    saludarPorPais(datos); 
}
