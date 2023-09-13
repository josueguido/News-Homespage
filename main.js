
function manejarMenu() {
    // Obtén referencias a los elementos relevantes
    const hamburgerButton = document.getElementById('hamburger');
    const closeButton = document.getElementById('Close');
    const menu = document.querySelector('ul');

    // Agrega un controlador de eventos para abrir el menú
    hamburgerButton.addEventListener('click', () => {
        menu.style.display = 'flex';
        hamburgerButton.style.display = 'none';
        closeButton.style.display = 'block'; // Muestra el botón "X"
    });

    // Agrega un controlador de eventos para cerrar el menú
    closeButton.addEventListener('click', () => {
        menu.style.display = 'none';
        closeButton.style.display = 'none';
        hamburgerButton.style.display = 'block'; // Muestra el botón de hamburguesa
    });
}


// Llama a la función cuando la página se carga
window.addEventListener('load', manejarMenu);