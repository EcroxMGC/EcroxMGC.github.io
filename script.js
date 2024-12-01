// Mostrar el popup al cargar la página
window.onload = function() {
    const popup = document.getElementById('popup');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const galeria = document.getElementById('galeria');

    // Función para ocultar el popup y mostrar el contenido
    iniciarBtn.addEventListener('click', function() {
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
        // Añadir la clase 'show-video' para mostrar el video
        galeria.classList.add('show-video');
    });
};
