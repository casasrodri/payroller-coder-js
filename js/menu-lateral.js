function seleccionMenu(menu) {
    const submenu = document.querySelector('#'+menu)

    quitarTodasSelecciones()
    submenu.classList.add("active")
}

function quitarTodasSelecciones() {
    const submenues = document.querySelectorAll('li .nav-link')
    submenues.forEach( (menu) => {
        menu.classList.remove("active")
    })
}