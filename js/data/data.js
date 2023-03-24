// Cargar empleados
async function cargarEmpleados() {
    
    const respuesta = await fetch('./js/data/empleados.json')
    const empleados_json = await respuesta.json()

    empleados_json.forEach( e => {
        empleados.push( new Empleado(e) )
    })
}

let empleados = []
cargarEmpleados()

// _________________________________________________
// __________        LOCAL STORAGE        __________
// _________________________________________________

function cargarEmpleadosLs() {
    if (localStorage.getItem('empleadosLS') === null) {
        empleadosLS = empleados
        setTimeout(guardarEmpLS, 1000)
    } else {
        empleadosLS = getEmpleadosLS()
    }
}

let empleadosLS
setTimeout(cargarEmpleadosLs(), 1000)

function guardarEmpLS() {
    localStorage.setItem('empleadosLS', JSON.stringify(empleadosLS))
}

function getEmpleadosLS() {
    const json = localStorage.getItem('empleadosLS')

    if (json === null) return

    const arr = JSON.parse(json)

    arr.forEach( e => e.fecha_ing = new Date(e.fecha_ing))
    arr.forEach( e => e.fecha_nacim = new Date(e.fecha_nacim))

    const arr_out = []
    arr.forEach( e => arr_out.push(new Empleado(e)))

    return arr_out
}


// Buscar por legajo
function buscarEmpleado(legajo) {
    return getEmpleadosLS().filter( e => e.legajo === Number(legajo))[0]
}


let novedadesLS
setTimeout(cargarNovedadesLs(), 1000)

function cargarNovedadesLs() {
    if (localStorage.getItem('novedadesLS') === null) {
        novedadesLS = []
        setTimeout(guardarNovLS, 1000)
    } else {
        novedadesLS = getNovedadesLS()
    }
}

function guardarNovLS() {
    localStorage.setItem('novedadesLS', JSON.stringify(novedadesLS))
}

function getNovedadesLS() {
    const json = localStorage.getItem('novedadesLS')

    if (json === null) return

    const arr = JSON.parse(json)

    const arr_out = []
    arr.forEach( n => {
        arr_out.push(new Novedad(n.empleado.legajo, n.novedad, n.tipo, n.cantidad))
    })

    return arr_out
}