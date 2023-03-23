function cargarFormAltaNovedad() {
    document.getElementById('canvas-contenido').innerHTML = formAltaNovedad()
    cargarIconosFeather()

    // recapturarElemFormAltaNovedad()
    cargarEmpleadosDesplegable()

    fANempleado.addEventListener('change', onSelectEmpleado)
    fANnovedad.addEventListener('change', onSelectLicencia)
    fANbtnOk.addEventListener('click', btnGuardarNovedad)
    fANbtnCancelar.addEventListener('click', refreshPage)
}

function formAltaNovedad() {
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

// Captura de elementos:
let fANempleado = document.querySelector('form#altaNovedad #empleado')
let fANnovedad = document.querySelector('form#altaNovedad #novedad')
let fANtipo = document.querySelector('form#altaNovedad #tipo')
let fANcantidad = document.querySelector('form#altaNovedad #cantidad')

let fANbtnOk = document.querySelector('#guardarEmpleado')
let fANbtnCancelar = document.querySelector('#cancelarGuardarEmpleado')

function recapturarElemFormAltaNovedad() {
    fANempleado = document.querySelector('form#altaNovedad #empleado')
    fANnovedad = document.querySelector('form#altaNovedad #novedad')
    fANtipo = document.querySelector('form#altaNovedad #tipo')
    fANcantidad = document.querySelector('form#altaNovedad #cantidad')

    fANbtnOk = document.querySelector('#guardarNovedad')
    fANbtnCancelar = document.querySelector('#cancelarGuardarNovedad')
}

function btnGuardarNovedad() {

    if (!camposValidos()){
        return undefined
    }

    alert('Acá se guardarían los datos')
    console.log({fANempleado, fANnovedad, fANtipo, fANcantidad});


    // let ultimo_id = 0
    // getAllEmpleados().forEach( emp => {
    //     id = emp.legajo
    //     if (id > ultimo_id) { ultimo_id = emp.legajo }
    // })

    // const nuevoEmpleado = new Empleado({
    //     nombre: fNEnombre.value, 
    //     apellido: fNEapellido.value, 
    //     dni: fNEdni.value, 
    //     telefono: fNEtelefono.value, 
    //     fecha_nacim: fNEnacimiento.value, 
    //     legajo: ultimo_id + 1, 
    //     cargo: fNEcargo.value, 
    //     sueldo: fNEsueldo.value, 
    //     modalidad: fNEmodalidad.value, 
    //     fecha_ing: fNEingreso.value,
    //     foto: 0,
    // })

    // empleadosLS.push(nuevoEmpleado)
    // guardarEmpLS()

    // Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Empleado dado de alta con éxito!',
    //     showConfirmButton: false,
    //     timer: 2000
    // })
    
    // setTimeout(() => {
    //     refreshPage()
    //   }, 3000);
}

function camposValidos() {
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
    recapturarElemFormAltaNovedad()
    opciones = '<option></option>'
    getAllEmpleados().forEach( e => {
        opciones += `<option>[${e.cargo}] ${e.nombre} ${e.apellido}</option>`
    })

    fANempleado.innerHTML = opciones
}

function onSelectEmpleado() {
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

function onSelectLicencia() {

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