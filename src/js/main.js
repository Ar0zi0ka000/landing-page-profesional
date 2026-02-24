/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark'
const sunIcon = 'bx-sun' // Clase del icono de sol en Boxicons

// 1. Verificamos si el usuario ya tenía una preferencia guardada
const selectedTheme = localStorage.getItem('selected-theme')

// 2. Si hay una preferencia, la aplicamos de inmediato al cargar la página
if (selectedTheme) {
  document.documentElement.setAttribute('data-theme', selectedTheme)
  // Ajustamos el icono visualmente
  if (selectedTheme === 'dark') {
      themeButton.classList.add(sunIcon)
  }
}

// 3. Escuchamos el evento click en el botón
themeButton.addEventListener('click', () => {
    const rootElement = document.documentElement
    const currentTheme = rootElement.getAttribute('data-theme')
    
    // Lógica de intercambio (Toggle)
    if (currentTheme === 'dark') {
        rootElement.setAttribute('data-theme', 'light')
        themeButton.classList.remove(sunIcon)
        localStorage.setItem('selected-theme', 'light') // Guardamos preferencia
    } else {
        rootElement.setAttribute('data-theme', 'dark')
        themeButton.classList.add(sunIcon)
        localStorage.setItem('selected-theme', 'dark') // Guardamos preferencia
    }
})