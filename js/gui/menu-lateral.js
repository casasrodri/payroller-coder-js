const menuTextoAzul = "text-blue-700 dark:text-blue-500"
const menuTextoGris = "text-gray-900 dark:text-white"
const menuSvgAzul = "text-blue-500 dark:text-blue-500"
const menuSvgGris = "text-gray-500 dark:text-gray-400"

const modalNotImpl = document.getElementById('display-not-implemented')

function modalNotImplemented() {
    // Muestra alerta de que dicha función no se encuentra implementada.
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'warning',
        title: 'Oops! Esta funcionalidad aún no se encuentra implementada!'
    })

    cerrarMenuLateral()
}

quitarTodasSelecciones()

function seleccionMenu(menu) {
    // Evalua la opción seleccionada en el menu, para mostrar el contenido elegido.
    if (menu === 'menu-empleados-admin') {
        cargarEmpleadosAdmin()
    } else if (menu === 'menu-empleados-consulta') {
        cargarEmpleadosList()
    } else if (menu === 'menu-novedades-alta') {
        cargarFormAltaNovedad()
    } else if (menu === 'menu-novedades-admin') {
        cargarNovedadesAdmin()
    } else if (menu === 'menu-liquidacion') {
        cargarSeccionLiquidacion()
    } else {
        modalNotImplemented()
        return
    }

    const submenu = document.getElementById(menu)
    quitarTodasSelecciones()
    estadoMenu(submenu, '+')

    cerrarMenuLateral()
}

function modEstilos(elemento, operacion, estilos) {
    // Modifica los estilos del elemento seleccionado
    const estilos_split = estilos.split(' ')
    estilos_split.forEach((clase) => {
        if (operacion === '+') {
            elemento.classList.add(clase)
        } else if (operacion === '-') {
            elemento.classList.remove(clase)
        }
    })
}

function estadoMenu(menu, operacion) {
    // Altera los estilos, para mostrar que un menú se encuentra o no seleccionado.
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
    // Hace que todos los menues se muestren de-seleccionados
    const submenues = document.getElementById('menu-lateral').querySelectorAll('a')
    submenues.forEach((menu) => { estadoMenu(menu, '-') })
}

const hide_menu = document.getElementById('hide-menu')
function cerrarMenuLateral() {
    // Oculta el menú lateral en pantallas pequeñas
    hide_menu.click()
}

const show_menu = document.getElementById('show-menu')
setTimeout(function () {
    // Si la pantalla es pequeña (menor a 640px, muestra el menú lateral)
    if (screenSize()['w'] < 640) show_menu.click()
}, 5)