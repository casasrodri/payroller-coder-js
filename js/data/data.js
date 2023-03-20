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


let empleadosLS
if (localStorage.getItem('empleadosLS') === null) {
    empleadosLS = []
} else {
    empleadosLS = getEmpleadosLS()
}


function guardarEmpLS() {
    localStorage.setItem('empleadosLS', JSON.stringify(empleadosLS))
}

function getEmpleadosLS() {
    const json = localStorage.getItem('empleadosLS')

    if (json === null) return

    const arr = JSON.parse(json)

    arr.forEach( e => e.fechaIngreso = new Date(e.fechaIngreso))
    return arr
}

function getAllEmpleados() {
    const empLocalSto = getEmpleadosLS()

    if (empLocalSto === undefined) return empleados
    return empleados.concat(getEmpleadosLS())
}


// Buscar por legajo
function buscarEmpleado(legajo) {
    return empleados.filter( e => e.legajo === Number(legajo))[0]
}