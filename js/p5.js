function ingresarFrutas() {
    const frutas = [];
    let fruta;

    while (true) {
        fruta = prompt("Ingresa el nombre de una fruta (o deja vacío para terminar):");
        if (!fruta) break;
        frutas.push(fruta);
    }

    alert("Frutas ingresadas: " + frutas.join(", "));
}

// Función para ingresar calificaciones y calcular el promedio
function ingresarCalificaciones() {
    const calificaciones = [];
    let calificacion;

    while (true) {
        calificacion = prompt("Ingresa una calificación (o deja vacío para terminar):");
        if (!calificacion) break;
        calificacion = parseFloat(calificacion);
        if (!isNaN(calificacion)) {
            calificaciones.push(calificacion);
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    if (calificaciones.length > 0) {
        const total = calificaciones.reduce((acc, val) => acc + val, 0);
        const promedio = total / calificaciones.length;
        alert("Calificaciones ingresadas: " + calificaciones.join(", "));
        alert("Promedio: " + promedio.toFixed(2));
    } else {
        alert("No ingresaste calificaciones.");
    }
}

// Función para trabajar con números
function ingresarNumeros() {
    let numeros = [10, 20, 30]; // Números iniciales
    let nuevoNumero;

    while (true) {
        nuevoNumero = prompt("Ingresa un número para añadir al arreglo (o deja vacío para terminar):");
        if (!nuevoNumero) break;
        nuevoNumero = parseFloat(nuevoNumero);
        if (!isNaN(nuevoNumero)) {
            numeros.push(nuevoNumero);
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    const suma = numeros.reduce((acc, val) => acc + val, 0);
    alert("Números ingresados: " + numeros.join(", "));
    alert("Suma total: " + suma);
}

// Asignar eventos a los botones
document.getElementById("btnFrutas").addEventListener("click", ingresarFrutas);
document.getElementById("btnCalificaciones").addEventListener("click", ingresarCalificaciones);
document.getElementById("btnNumeros").addEventListener("click", ingresarNumeros);