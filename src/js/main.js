/*==================== BLUR HEADER (Efecto de transparencia) ====================*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Cuando el scroll es superior a 50px, añade la clase blur-header
    window.scrollY >= 50 ? header.classList.add('blur-header') 
                         : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark'
const iconTheme = 'bx-sun'

// Tema seleccionado previamente (si existe)
const selectedTheme = localStorage.getItem('selected-theme')

// Obtenemos el tema actual que tiene la página validando la clase
const getCurrentTheme = () => document.documentElement.getAttribute('data-theme')

// Validamos si el usuario eligió un tema anteriormente
if (selectedTheme) {
  document.documentElement.setAttribute('data-theme', selectedTheme)
  themeButton.classList[selectedTheme === 'dark' ? 'add' : 'remove'](iconTheme)
}

// Activar / desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
    const currentTheme = getCurrentTheme()
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    // Aplicamos el nuevo tema al HTML
    document.documentElement.setAttribute('data-theme', newTheme)
    themeButton.classList.toggle(iconTheme)
    
    // Guardamos la elección del usuario
    localStorage.setItem('selected-theme', newTheme)
})