const menuTextoAzul = "text-blue-700 dark:text-blue-500"
const menuTextoGris = "text-gray-900 dark:text-white"
const menuSvgAzul = "text-blue-500 dark:text-blue-500"
const menuSvgGris = "text-gray-500 dark:text-gray-400"

const modalNotImpl = document.getElementById('display-not-implemented')

function limpiarContenedor() {
    modalNotImpl.click()
}

quitarTodasSelecciones()

function seleccionMenu(menu) {
    const submenu = document.getElementById(menu)
    quitarTodasSelecciones()
    estadoMenu(submenu, '+')

    cerrarMenuLateral()

    if (menu === 'menu-empleados-admin') {
        cargarEmpleadosCrud()
    } else if (menu === 'menu-empleados-consulta') {
        cargarEmpleadosList()
    } else {
        limpiarContenedor()
    }
}

function modEstilos(elemento, operacion, estilos) {
    const estilos_split = estilos.split(' ')
    estilos_split.forEach( (clase) => {
        if (operacion === '+') {
            elemento.classList.add(clase)
        } else if (operacion === '-') {
            elemento.classList.remove(clase)
        }        
    })
}

function estadoMenu(menu, operacion) {
    let svg = menu.querySelector('svg')
    
    if (operacion === '+') {
        // Se añaden estilos azules
        modEstilos(menu, '+', menuTextoAzul)
        modEstilos(svg, '+', menuSvgAzul)

        // Se eliminan estilos grises
        modEstilos(menu, '-', menuTextoGris)
        modEstilos(svg, '-', menuSvgGris)

    } else if (operacion === '-') {
        // Se eliminan estilos azules
        modEstilos(menu, '-', menuTextoAzul)
        modEstilos(svg, '-', menuSvgAzul)

        // Se agregan estilos grises
        modEstilos(menu, '+', menuTextoGris)
        modEstilos(svg, '+', menuSvgGris)
    }
}

function quitarTodasSelecciones() {
    const submenues = document.getElementById('menu-lateral').querySelectorAll('a')
    submenues.forEach( (menu) => { estadoMenu(menu, '-') })
}

const hambur = document.getElementById('btn-hamburguer')
function cerrarMenuLateral() {
    hambur.click()
}