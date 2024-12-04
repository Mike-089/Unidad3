
const menu = document.getElementById('menu');
const removeFirstButton = document.getElementById('removeFirst');
const addLinkButton = document.getElementById('addLink');


removeFirstButton.addEventListener('click', () => {
    if (menu.firstElementChild) {
        menu.removeChild(menu.firstElementChild);
    } else {
        alert('El menú está vacío.');
    }
});


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