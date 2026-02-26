/*==================== BLUR HEADER ====================*/
/**
 * Añade un efecto de desenfoque y fondo semi-transparente al header
 * cuando el usuario se desplaza más de 50px hacia abajo.
 */
const blurHeader = () => {
    const header = document.getElementById('header');
    // Uso de operador ternario para mayor limpieza visual del código
    window.scrollY >= 50 ? header.classList.add('blur-header') 
                         : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

/*==================== DARK LIGHT THEME (LOGICA DE SWITCH) ====================*/
/**
 * Gestiona el cambio de tema entre claro y oscuro utilizando un checkbox.
 * Persiste la elección del usuario en el LocalStorage del navegador.
 */
const themeCheckbox = document.getElementById('checkbox');
const darkTheme = 'dark';
const selectedTheme = localStorage.getItem('selected-theme');

// 1. Verificación inicial: Aplicar el tema guardado al cargar la página
if (selectedTheme) {
    // Aplicamos el atributo al elemento raíz (html)
    document.documentElement.setAttribute('data-theme', selectedTheme);
    
    // Si el tema guardado es 'light', marcamos el checkbox como activo (derecha)
    if (selectedTheme === 'light') {
        themeCheckbox.checked = true;
    }
}

// 2. Función para cambiar el tema al interactuar con el switch
const toggleTheme = () => {
    if (themeCheckbox.checked) {
        // Modo Claro activo
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('selected-theme', 'light');
    } else {
        // Modo Oscuro activo (Default)
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('selected-theme', 'dark');
    }
};

// Escuchamos el evento 'change' en el input tipo checkbox
themeCheckbox.addEventListener('change', toggleTheme);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/**
 * Resalta el enlace del menú de navegación correspondiente a la sección
 * que el usuario está visualizando actualmente.
 */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }                                                    
    });
}
window.addEventListener('scroll', scrollActive);