function cargarFormNuevoEmpleado() {
    document.getElementById('canvas-contenido').innerHTML = cargarForm()
    cargarIconosFeather()

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


    <div id="zona-formulario" class="max-w-xl">
        <form id="altaEmpleado">
            <div id="accordion-open" class="mt-3">
                <h2 id="accordion-open-heading-1">
                    <div
                        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span class="flex items-center">    
                            <span data-feather="user" class="w-5 h-5 mr-2 shrink-0"></span>
                            Datos personales
                        </span>
                    </div>
                </h2>
                <div id="accordion-open-body-1" class="" aria-labelledby="accordion-open-heading-1">
                    <div
                        class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p class="text-gray-500 dark:text-gray-400">
                            
                            <!-- DNI -->
                            <div class="mb-3">
                                <label for="dni"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DNI</label>
                                <input type="number" id="dni"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="DNI" required>
                            </div>
                            
                            <!-- Nombre -->
                            <div class="mb-3">
                                <label for="nombre"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input type="text" id="nombre"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Nombre" required>
                            </div>

                            <!-- Apellido -->
                            <div class="mb-3">
                                <label for="apellido"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                <input type="text" id="apellido"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Apellido" required>
                            </div>
                            
                            <!-- Teléfono -->
                            <div class="mb-3">
                                <label for="telefono"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                                <input type="tel" id="telefono"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Teléfono" required>
                            </div>

                            <!-- Fecha de nacimiento -->
                            <div class="mb-3">
                                <label for="fechaNacimiento"
                                    class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Fecha
                                    de nacimiento</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="date" id="fechaNacimiento" name="fechaNacimiento" class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                
                
                <h2 id="accordion-open-heading-3">
                    <div
                        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span class="flex items-center">    
                            <span data-feather="coffee" class="w-5 h-5 mr-2 shrink-0"></span>
                            Datos laborales
                        </span>
                        
                    </div>
                </h2>
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        
                        <!-- Cargo -->
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

                        <!-- Modalidad -->
                        <div class="mb-3">
                            <label for="modalidad"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modalidad de contratación</label>
                            <select id="modalidad"
                                class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option>
                                <option>Tiempo indeterminado</option>
                                <option>Plazo Fijo</option>
                                <option>Pasantía</option>
                            </select>
                        </div>

                        <!-- Sueldo -->
                        <label for="sueldo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Salario mensual
                        </label>
                        <div class="relative mb-6">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-gray-400 text-gray-500">
                            $
                        </div>
                        <input type="number" id="sueldo" min="0" max="999999999" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>

                        <!-- Fecha Ingreso -->
                        <div class="mb-3">
                            <label for="fechaIngreso"
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
                                <input type="date" id="fechaIngreso" name="fechaIngreso" class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </form>
    </div>

    <!-- Botones finales -->
    <div
        class="flex items-center pt-3 px-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end max-w-xl">
        <button id="guardarEmpleado" type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>
        <button id="cancelarGuardarEmpleado" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:hover:bg-red-800 hover:bg-red-400">Cancelar</button>
    </div><!-- Fin BOTONERA -->
    ` 
}

// Captura de elementos:
let fNEdni = document.querySelector('form#altaEmpleado #dni')
let fNEnombre = document.querySelector('form#altaEmpleado #nombre')
let fNEapellido = document.querySelector('form#altaEmpleado #apellido')
let fNEtelefono = document.querySelector('form#altaEmpleado #telefono')
let fNEnacimiento = document.querySelector('form#altaEmpleado #fechaNacimiento')

let fNEcargo = document.querySelector('form#altaEmpleado #cargo')
let fNEmodalidad = document.querySelector('form#altaEmpleado #modalidad')
let fNEsueldo = document.querySelector('form#altaEmpleado #sueldo')
let fNEingreso = document.querySelector('form#altaEmpleado #fechaIngreso')
let fNEbtnOk = document.querySelector('#guardarEmpleado')
let fNEbtnCancelar = document.querySelector('#cancelarGuardarEmpleado')


function recapturarElemForm() {
    fNEdni = document.querySelector('form#altaEmpleado #dni')
    fNEnombre = document.querySelector('form#altaEmpleado #nombre')
    fNEapellido = document.querySelector('form#altaEmpleado #apellido')
    fNEtelefono = document.querySelector('form#altaEmpleado #telefono')
    fNEnacimiento = document.querySelector('form#altaEmpleado #fechaNacimiento')

    fNEcargo = document.querySelector('form#altaEmpleado #cargo')
    fNEmodalidad = document.querySelector('form#altaEmpleado #modalidad')
    fNEsueldo = document.querySelector('form#altaEmpleado #sueldo')
    fNEingreso = document.querySelector('form#altaEmpleado #fechaIngreso')

    fNEbtnOk = document.querySelector('#guardarEmpleado')
    fNEbtnCancelar = document.querySelector('#cancelarGuardarEmpleado')
}

function btnGuardarEmpleado() {

    if (!camposValidos()){
        return undefined
    }    

    let ultimo_id = 0
    getAllEmpleados().forEach( emp => {
        id = emp.legajo
        if (id > ultimo_id) { ultimo_id = emp.legajo }
    })

    const nuevoEmpleado = new Empleado({
        nombre: fNEnombre.value, 
        apellido: fNEapellido.value, 
        dni: fNEdni.value, 
        telefono: fNEtelefono.value, 
        fecha_nacim: fNEnacimiento.value, 
        legajo: ultimo_id + 1, 
        cargo: fNEcargo.value, 
        sueldo: fNEsueldo.value, 
        modalidad: fNEmodalidad.value, 
        fecha_ing: fNEingreso.value,
        foto: 0,
    })

    empleadosLS.push(nuevoEmpleado)
    guardarEmpLS()

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empleado dado de alta con éxito!',
        showConfirmButton: false,
        timer: 2000
    })
    
    setTimeout(() => {
        refreshPage()
      }, 3000);
}

function camposValidos() {
    const inputs = [
        fNEdni, fNEnombre, fNEapellido, fNEtelefono, fNEnacimiento,
        fNEcargo, fNEmodalidad, fNEsueldo, fNEingreso
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