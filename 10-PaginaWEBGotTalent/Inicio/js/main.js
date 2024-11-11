// Esperar a que la página se cargue completamente
window.addEventListener('load', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Añadir un evento de clic al botón de "Aceptar cookies"
    acceptCookiesButton.addEventListener('click', function() {
        // Añadir la clase "hidden" para ocultar el banner
        cookieBanner.classList.add('hidden');
    });
});