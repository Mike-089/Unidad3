// Obtener referencias a los elementos del DOM
const menu = document.getElementById('menu');
const removeFirstButton = document.getElementById('removeFirst');
const addLinkButton = document.getElementById('addLink');

// Función para eliminar el primer elemento del menú
removeFirstButton.addEventListener('click', () => {
    if (menu.firstElementChild) {
        menu.removeChild(menu.firstElementChild);
    } else {
        alert('El menú está vacío.');
    }
});

// Función para agregar un nuevo enlace al menú
addLinkButton.addEventListener('click', () => {
    const newLink = prompt('Ingresa la URL de la nueva película:');
    const newTitle = prompt('Ingresa el título de la nueva película:');

    if (newLink && newTitle) {
        const newListItem = document.createElement('li');
        const newAnchor = document.createElement('a');
        newAnchor.href = newLink;
        newAnchor.target = '_blank';
        newAnchor.textContent = newTitle;

        newListItem.appendChild(newAnchor);
        menu.appendChild(newListItem);
    } else {
        alert('Debes ingresar un título y una URL válidos.');
    }
});