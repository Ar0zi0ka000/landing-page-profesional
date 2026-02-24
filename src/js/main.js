/*==================== CONSTANTES GLOBALES ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      header = document.getElementById('header')

/*==================== CAMBIO DE TEMA (DARK/LIGHT) ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark'
const iconTheme = 'bx-sun'

// 1. Obtener preferencia previa del usuario
const selectedTheme = localStorage.getItem('selected-theme')

// 2. Aplicar tema guardado al cargar la página
if (selectedTheme) {
  document.documentElement.setAttribute('data-theme', selectedTheme === 'dark' ? 'dark' : 'light')
  themeButton.classList[selectedTheme === 'dark' ? 'add' : 'remove'](iconTheme)
}

// 3. Lógica de activación/desactivación manual
themeButton.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    
    // Cambiamos el atributo en la etiqueta HTML
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
    
    // Cambiamos el icono visualmente
    themeButton.classList.toggle(iconTheme)
    
    // Guardamos la elección para la próxima visita
    localStorage.setItem('selected-theme', isDark ? 'light' : 'dark')
})

/*==================== EFECTO BLUR EN EL HEADER ====================*/
// Esta función añade una sombra y desenfoque al menú cuando bajas la página
const blurHeader = () => {
    // Si el scroll es mayor a 50px de altura, añade la clase 'blur-header'
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*==================== SCROLL REVEAL (EFECTO DE APARICIÓN) ====================*/
// Como ingeniero, podrías usar una librería como ScrollReveal para el efecto del video.
// Por ahora, simularemos la entrada suave con clases de CSS o lógica simple.
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)