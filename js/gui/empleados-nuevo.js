function cargarFormNuevoEmpleado() {
    document.getElementById('canvas-contenido').innerHTML = cargarForm()

    recapturarElemForm()
    fNEbtnOk.addEventListener('click', ()=>{ btnGuardarEmpleado() })
    fNEbtnCancelar.addEventListener('click', ()=>{ cargarEmpleadosAdmin() })
}

function cargarForm() {
    return `

    <div class="relative">
        <div id="section-title" class="grid gap-3 grid-flow-col auto-cols-auto grid-flow-row auto-rows-min">
            <div id="cell-title" class="place-self-start">
                <h2 class="text-4xl dark:text-white mt-2">Nuevo empleado</h2>
            </div>
        </div>
    </div>


    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">


    <div id="zona-formulario">
        <form id="altaEmpleado">
            <div class="mb-3">
                <label for="nombre"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" id="nombre"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Nombre" required>
            </div>

            <div class="mb-3">
                <label for="apellido"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                <input type="text" id="apellido"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Apellido" required>
            </div>

            <div class="mb-3">
                <label for="cargo"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargo</label>
                <select id="cargo"
                    class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option></option>
                    <option>Analista Jr.</option>
                    <option>Analista Sr.</option>
                    <option>Gerente</option>
                    <option>Operario</option>
                    <option>Pasante</option>
                    <option>Repartidor</option>
                    <option>Secretario</option>
                    <option>Vendedor</option>
                </select>
            </div>

            <label for="sueldo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Salario mensual
            </label>
            <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-gray-400 text-gray-500">
                $
            </div>
            <input type="number" id="sueldo" min="0" max="999999999" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="mb-3">
                <label for="fecha"
                    class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Fecha
                    de ingreso</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="date" id="fechaIngreso" name="fecha" class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
            </div>
        </form>
    </div>

    <!-- Botones finales -->
    <div
        class="flex items-center pt-3 px-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end">
        <button id="guardarEmpleado" type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>
        <button id="cancelarGuardarEmpleado" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:hover:bg-red-800 hover:bg-red-400">Cancelar</button>
    </div><!-- Fin BOTONERA -->
    ` 
}

// Captura de elementos:

let fNEnombre = document.querySelector('form#altaEmpleado #nombre')
let fNEapellido = document.querySelector('form#altaEmpleado #apellido')
let fNEcargo = document.querySelector('form#altaEmpleado #cargo')
let fNEsueldo = document.querySelector('form#altaEmpleado #sueldo')
let fNEingreso = document.querySelector('form#altaEmpleado #fechaIngreso')
let fNEbtnOk = document.querySelector('#guardarEmpleado')
let fNEbtnCancelar = document.querySelector('#cancelarGuardarEmpleado')


function recapturarElemForm() {
    fNEnombre = document.querySelector('form#altaEmpleado #nombre')
    fNEapellido = document.querySelector('form#altaEmpleado #apellido')
    fNEcargo = document.querySelector('form#altaEmpleado #cargo')
    fNEsueldo = document.querySelector('form#altaEmpleado #sueldo')
    fNEingreso = document.querySelector('form#altaEmpleado #fechaIngreso')
    fNEbtnOk = document.querySelector('#guardarEmpleado')
    fNEbtnCancelar = document.querySelector('#cancelarGuardarEmpleado')
}

function btnGuardarEmpleado() {


    if (!camposValidos()){
        return undefined
    }    

    let nuevo_id = 0
    getAllEmpleados().forEach( emp => {
        id = emp.legajo
        if (id > nuevo_id) { nuevo_id = emp.legajo }
    })

    const nuevoEmpleado = new Empleado( 
        nuevo_id + 1, 
        fNEnombre.value, 
        fNEapellido.value, 
        fNEcargo.value,
        fNEsueldo.value,
        fNEingreso.value,
        0 
    )

    empleadosLS.push(nuevoEmpleado)
    guardarEmpLS()

    abrirPopUp('ok', 'Se dió de alta el nuevo empleado!')
    setTimeout(() => {
        refreshPage()
      }, 3000);
}

function camposValidos() {
    const inputs = [fNEnombre, fNEapellido, fNEcargo, fNEsueldo, fNEingreso]

    let valido = true
    inputs.forEach(inp => {
        if (inp.value === "") {
            abrirPopUp('error', 'Se deben completar todos los campos para continuar.')
            valido = false
        }
    })

    return valido
}