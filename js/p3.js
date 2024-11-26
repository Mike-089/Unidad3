function recolectarDatos() {
    alert("Bienvenido. Vamos a recolectar tus datos.");
    let nombre = prompt("¿Cuál es tu nombre?");
    let actividad = prompt("¿Cuál es tu actividad favorita?");
    return { nombre, actividad}; 
}

function confirmarDatos(datos) {
    let mensaje = `Estos son tus datos:\nNombre: ${datos.nombre}\nActividad favorita: ${datos.actividad}`;
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


function saludar(datos) {
    alert(`¡Hola, ${datos.nombre}! Espero que estés disfrutando de desperdiciar tu tiempo en ${datos.actividad}.`);
}



let datos = recolectarDatos(); 
let datosCorrectos = confirmarDatos(datos); 
mostrarMensajeFinal(datosCorrectos); 
if (datosCorrectos) {
    saludar(datos); 
}
