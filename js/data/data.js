
// Simula los datos importados de una base de datos
let empleados_db = [
    ['Pedro', 'Roite', 'Gerente', 482861.61, '2005-05-17', 2],
    ['Paulo', 'Banegas', 'Analista Jr.', 236119.33, '1990-04-03', 2],
    ['Lucrecia', 'Lopez', 'Vendedor', 448544.77, '2020-03-27', 3],
    ['Dario', 'Juarez', 'Secretario', 280777.19, '1988-12-31', 3],
    ['Camila', 'Neyra', 'Operario', 307918.37, '1988-09-20', 4],
    ['Melisa', 'Sosa', 'Analista Jr.', 232042.85, '1985-09-24', 1],
    ['Faustino', 'Sabattini', 'Vendedor', 347831.65, '2008-07-01', 0],
    ['Pedro', 'Maldonado', 'Operario', 215381.18, '2004-09-19', 4],
    ['Felipe', 'Peinado', 'Repartidor', 342593.88, '2014-10-26', 0],
    ['Macarena', 'Flores', 'Pasante', 302826.15, '1994-01-29', 2],
    ['Carolina', 'Rolando', 'Analista Jr.', 212769.47, '2000-09-11', 0],
    ['Agustina', 'Nieto', 'Operario', 435500.02, '2004-05-04', 3],
    ['Graciela', 'Gordillo', 'Vendedor', 291803.06, '1989-06-18', 0]
]

// Instanciación de objetos
let id = 1
let empleados = []

empleados_db.forEach( (e) => {
    id_emp = id++
    empleados.push( new Empleado( id_emp, e[0], e[1], e[2], e[3], e[4], e[5], id_emp ))
})
console.log(empleados);