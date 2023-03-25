function cargarFormAltaNovedad() {
    // Muestra un formulario para dar de alta una nueva novedad, asociada a un empleado.
    document.getElementById('canvas-contenido').innerHTML = formAltaNovedad()
    cargarIconosFeather()

    cargarEmpleadosDesplegable()

    fANempleado.addEventListener('change', onSelectEmpleado)
    fANnovedad.addEventListener('change', onSelectNovedad)
    fANbtnOk.addEventListener('click', btnGuardarNovedad)
    fANbtnCancelar.addEventListener('click', refreshPage)
}

function formAltaNovedad() {
    // Devuelve el código HTML del formulario de nueva novedad.
    return `

    <div class="relative">
        <div id="section-title" class="grid gap-3 grid-flow-col auto-cols-auto grid-flow-row auto-rows-min">
            <div id="cell-title" class="place-self-start">
                <h2 class="text-4xl dark:text-white mt-2">Ingreso de novedades</h2>
            </div>
        </div>
    </div>

    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">

    <div id="zona-formulario" class="max-w-xl">
        <form id="altaNovedad">
            <div id="accordion-open" class="mt-3">
                <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1">
                    <div
                        class="p-5 border border-gray-200 dark:border-gray-700 rounded-t-xl rounded-b-xl">
                        <p class="text-gray-500 dark:text-gray-400">

                            <!-- Empleado -->
                            <div class="mb-3">
                                <label for="empleado"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empleado</label>
                                <select id="empleado"
                                    class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option></option>
                                    <option>Rodrigo Casas</option>
                                    <option>Paula Griffa</option>
                                    <option>Lucca Casas</option>
                                </select>
                            </div>
                            
                            <!-- Novedad -->
                            <div class="mb-3">
                                <label for="novedad"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Novedad</label>
                                <select id="novedad"
                                    class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled>
                                    <option></option>
                                    <option>Horas extras</option>
                                    <option>Licencias</option>
                                </select>
                            </div>
                            
                            <!-- Tipo -->
                            <div class="mb-3">
                                <label for="tipo"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                                <select id="tipo"
                                    class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled>
                                    <option></option>
                                    <option>Durante la semana (extras al 50%)</option>
                                    <option>Durante el fin de semana (extras al 100%)</option>
                                    <option>Licencia por enfermedad</option>
                                    <option>Licencia por estudio</option>
                                    <option>Licencia por maternidad</option>
                                    <option>Licencia por paternidad</option>
                                    <option>Licencia por donación de sangre</option>
                                    <option>Licencia por vacaciones</option>
                                </select>
                            </div>

                            <!-- Horas/Días -->
                            <div class="mb-3">
                                <label for="cantidad"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
                                <input type="number" id="cantidad"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Cantidad" required disabled>
                            </div>
                            
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <!-- Botones finales -->
    <div
        class="flex items-center pt-3 px-2 space-x-2 justify-end max-w-xl">
        <button id="guardarNovedad" type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>
        <button id="cancelarGuardarNovedad" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:hover:bg-red-800 hover:bg-red-400">Cancelar</button>
    </div><!-- Fin BOTONERA -->
    ` 
}

// Variables para elementos del form:
let fANempleado, fANnovedad, fANtipo, fANcantidad, fANbtnOk, fANbtnCancelar

function recapturarElemFormAltaNovedad() {
    // Se asocia cada input o boton a las variables
    fANempleado = document.querySelector('form#altaNovedad #empleado')
    fANnovedad = document.querySelector('form#altaNovedad #novedad')
    fANtipo = document.querySelector('form#altaNovedad #tipo')
    fANcantidad = document.querySelector('form#altaNovedad #cantidad')

    fANbtnOk = document.querySelector('#guardarNovedad')
    fANbtnCancelar = document.querySelector('#cancelarGuardarNovedad')
}

function btnGuardarNovedad() {
    // Guarda la novedad en el LS, verificando previamente la integridad de datos.
    if (!camposValidosNovedades()){
        return undefined
    }

    const legajo = fANempleado.value
    const novedad = fANnovedad.value

    let tipo
    if (novedad === 'Licencias') {
        tipo = fANtipo.value.replace('Licencia por ','').toProperCase()
    } else {
        const exprPorcentaje = /\d+%/
        tipo = exprPorcentaje.exec(fANtipo.value)[0]
    }

    const cantidad = fANcantidad.value
    novedadesLS.push( new Novedad(legajo, novedad, tipo, cantidad) )
    guardarNovLS()

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Novedad dada de alta con éxito!',
        showConfirmButton: false,
        timer: 2000
    })
    
    setTimeout(() => {
        seleccionMenu('menu-novedades-admin')
    }, 2000);
}

function camposValidosNovedades() {
    // Verifica que no existan campos sin completar
    const inputs = [
        fANempleado, fANnovedad, fANtipo, fANcantidad
    ]

    let valido = true
    inputs.forEach(inp => {
        if (inp.value === "") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Se deben completar todos los datos para continuar',
                showConfirmButton: false,
                timer: 2000
            })
            valido = false
        }
    })

    return valido
}

function cargarEmpleadosDesplegable() {
    // Carga cada empleado en la lista desplegable, como opción.
    recapturarElemFormAltaNovedad()
    opciones = '<option></option>'
    getEmpleadosLS().forEach( e => {
        opciones += `<option value="${e.legajo}">[${e.cargo}] ${e.nombre} ${e.apellido}</option>`
    })

    fANempleado.innerHTML = opciones
}

function onSelectEmpleado() {
    // Al seleccionar el empleado, se habilita el campo de la novedad a cargar.
    recapturarElemFormAltaNovedad()

    if (fANempleado.value !== "") {
        fANnovedad.disabled = false
    } else {
        fANnovedad.disabled = true
    }
}

const listadoHsExtras = [
    'Durante la semana (extras al 50%)',
    'Durante el fin de semana (extras al 100%)'
]

const listadoLicencias = [
    'Licencia por enfermedad',
    'Licencia por estudio',
    'Licencia por maternidad',
    'Licencia por paternidad',
    'Licencia por donación de sangre',
    'Licencia por vacaciones'
]

function onSelectNovedad() {
    // Al seleccionar la novedad, se cargan las opciones para elegir el tipo de novedad.
    recapturarElemFormAltaNovedad()

    if (fANnovedad.value !== "") {
        fANtipo.disabled = false
        fANcantidad.disabled = false
    } else {
        fANtipo.disabled = true
        fANcantidad.disabled = true
    }

    opciones = '<option></option>'

    const tipo = (fANnovedad.value === 'Licencias' ? listadoLicencias : listadoHsExtras)
    
    tipo.forEach( t => {
        opciones += `<option>${t}</option>`
    })

    fANtipo.innerHTML = opciones
}
