let legajoEnModificacion
function cargarFormEditEmpleado(legajo) {
    document.getElementById('canvas-contenido').innerHTML = cargarForm()
    cargarIconosFeather()

    // Se cargan los actuales datos del empleado
    legajoEnModificacion = legajo
    const empleado = buscarEmpleado(legajo)

    document.querySelector('#cell-title h2').textContent = 'Modificar empleado'

    recapturarElemForm()

    fNEdni.value = empleado.dni
    fNEnombre.value = empleado.nombre
    fNEapellido.value = empleado.apellido
    fNEtelefono.value = empleado.telefono
    fNEnacimiento.value = isoString(empleado.fecha_nacim)

    fNEcargo.value = empleado.cargo
    fNEmodalidad.value = empleado.modalidad
    fNEsueldo.value = empleado.sueldo
    fNEingreso.value = isoString(empleado.fecha_ing)

    fNEbtnOk.addEventListener('click', () => { btnGuardarModifEmpleado() })
    fNEbtnCancelar.addEventListener('click', () => { cargarEmpleadosAdmin() })
}

function isoString(fecha) {
    function pad(n) { return n < 10 ? '0' + n : n }
    return `${fecha.getUTCFullYear()}-${pad(fecha.getUTCMonth())}-${pad(fecha.getUTCDate())}`
}

function btnGuardarModifEmpleado() {

    if (!camposValidos()) {
        return undefined
    }

    const nuevoEmpleado = new Empleado({
        nombre: fNEnombre.value,
        apellido: fNEapellido.value,
        dni: fNEdni.value,
        telefono: fNEtelefono.value,
        fecha_nacim: fNEnacimiento.value,
        legajo: buscarEmpleado(legajoEnModificacion).legajo,
        cargo: fNEcargo.value,
        sueldo: fNEsueldo.value,
        modalidad: fNEmodalidad.value,
        fecha_ing: fNEingreso.value,
        foto: buscarEmpleado(legajoEnModificacion).foto,
    })

    // Elimino la versión anterior
    eliminarEmpleado(legajoEnModificacion)

    // Agrego el modificado
    empleadosLS.push(nuevoEmpleado)
    guardarEmpLS()

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empleado modificado con éxito!',
        showConfirmButton: false,
        timer: 2000
    })

    setTimeout(() => {
        cargarEmpleadosAdmin()
    }, 2000);
}


function eliminarEmpleado(legajo) {
    for (let i = 0; i < empleadosLS.length; i++) {
        if (empleadosLS[i].legajo === legajo) {
            empleadosLS.splice(i, 1);
        }
    }
}

function btnEliminarEmpleado(legajo) {
    const empl = buscarEmpleado(legajo)

    Swal.fire({
        title: 'Deseas eliminar al empleado?',
        text: `${empl.nombre} ${empl.apellido}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ddd',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',

    }).then((result) => {
        if (result.isConfirmed) {

            eliminarEmpleado(legajo)
            guardarEmpLS()

            Swal.fire(
                'Eliminado!',
                'Se ha eliminado al empleado!',
                'success'
            )

            setTimeout(() => {
                cargarEmpleadosAdmin()
            }, 0);
        }
    })
}