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
});
