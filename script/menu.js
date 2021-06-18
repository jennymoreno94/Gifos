const theme = document.querySelector('#mode')
let mode = document.getElementById("mode");
theme.addEventListener("click", () => {
  const dark = document.documentElement.getAttribute('data-theme')
  if (dark === null) {
    mode.innerText = "Modo Diurno"
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('data-theme', 'dark')
  } else {
    mode.innerText = "Modo Nocturno"
    document.documentElement.removeAttribute('data-theme')
    localStorage.removeItem('data-theme')
  }

})

function Menu() {
  var element = document.querySelector("#header");
  element.classList.toggle("visible_menu");
}

window.Menu = Menu;