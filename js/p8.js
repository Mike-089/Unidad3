
const suma = (a, b) => a + b;
document.getElementById('btnSuma').addEventListener('click', () => {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`La suma de ${num1} y ${num2} es: ${suma(num1, num2)}`);
    } else {
        alert('Por favor, ingresa valores numéricos válidos.');
    }
});

const esPar = (num) => num % 2 === 0;
document.getElementById('btnEsPar').addEventListener('click', () => {
    const num = parseInt(prompt('Ingresa un número:'));
    if (!isNaN(num)) {
        alert(`El número ${num} es ${esPar(num) ? 'par' : 'impar'}.`);
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

document.getElementById('btnMap').addEventListener('click', () => {
    const numeros = [1, 2, 3, 4, 5];
    const cuadrados = numeros.map(num => num ** 2);
    alert(`Array original: [${numeros}]\nArray de cuadrados: [${cuadrados}]`);
});

const obtenerNombres = (arr) => arr.map(obj => obj.nombre);
document.getElementById('btnNombres').addEventListener('click', () => {
    const listaObjetos = [
        { nombre: 'Juan', edad: 25 },
        { nombre: 'Ana', edad: 30 },
        { nombre: 'Luis', edad: 22 }
    ];
    const nombres = obtenerNombres(listaObjetos);
    alert(`Nombres extraídos: [${nombres.join(', ')}]`);
});