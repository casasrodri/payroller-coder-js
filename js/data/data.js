
// Simula los datos importados de una base de datos
let empleados_db = [
    ['Pedro', 'Roite', 'Gerente', 482861.61, '2005-05-17'],
    ['Paulo', 'Banegas', 'Analista Sr.', 236119.33, '1990-04-03'],
    ['Lucrecia', 'Lopez', 'Vendedor', 448544.77, '2020-03-27'],
    ['Dario', 'Juarez', 'Secretario', 280777.19, '1988-12-31'],
    ['Camila', 'Neyra', 'Operario', 307918.37, '1988-09-20'],
    ['Melisa', 'Sosa', 'Analista Jr.', 232042.85, '1985-09-24'],
    ['Faustino', 'Sabattini', 'Vendedor', 347831.65, '2008-07-01'],
    ['Pedro', 'Maldonado', 'Operario', 215381.18, '2004-09-19'],
    ['Felipe', 'Peinado', 'Repartidor', 342593.88, '2014-10-26'],
    ['Macarena', 'Flores', 'Pasante', 302826.15, '1994-01-29'],
    ['Carolina', 'Rolando', 'Analista Jr.', 212769.47, '2000-09-11'],
    ['Agustina', 'Nieto', 'Operario', 435500.02, '2004-05-04'],
    ['Graciela', 'Gordillo', 'Vendedor', 291803.06, '1989-06-18']
]

// Instanciación de objetos
let id = 1
let empleados = []

empleados_db.forEach( (e) => {
    id_emp = id++
    empleados.push( new Empleado( id_emp, e[0], e[1], e[2], e[3], e[4], id_emp ))
})


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