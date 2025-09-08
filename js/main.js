// Archivo JavaScript principal.

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Cargar Header ---
    // Busca el elemento <header> en la página
            // --- Lógica del Menú Hamburguesa ---
            // IMPORTANTE: Este código debe ejecutarse DESPUÉS de que el header se haya cargado.
            const hamburgerButton = document.querySelector(".hamburger-menu");
            const mainNav = document.querySelector("#main-nav");

            if (hamburgerButton && mainNav) {
                hamburgerButton.addEventListener("click", function() {
                    mainNav.classList.toggle("is-active");
                    const isExpanded = mainNav.classList.contains("is-active");
                    hamburgerButton.setAttribute("aria-expanded", isExpanded);
                });
            }
        })
        .catch(error => {
            console.error("Error al cargar componentes:", error);
            // Opcional: Muestra un mensaje de error en la página
            headerPlaceholder.innerHTML = "<p>Error al cargar el menú de navegación.</p>";
        });





/* 
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Alterna las clases para la animación de la hamburguesa y la visibilidad del menú
            hamburger.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');

            // Alterna los atributos ARIA para accesibilidad
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }
}); 
*/