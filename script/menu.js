
const theme = document.querySelector('#mode')


theme.addEventListener("click",()=> {
    const dark = document.documentElement.getAttribute('data-theme')
    if(dark === null) {
        document.documentElement.setAttribute('data-theme','dark')
        localStorage.setItem('data-theme','dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.removeItem('data-theme')  
    }
 
})
function Menu() {
    var element = document.body;
    element.classList.toggle("visible_menu");
}
