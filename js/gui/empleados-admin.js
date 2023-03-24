let listadoEmpleados = ""

function cargarEmpleadosAdmin() {

    document.getElementById('canvas-contenido').innerHTML = paginaAdmin()
    
    // Se cargan los datos de los TODOS empleados
    contenidoTabla()

    document.getElementById('table-search').addEventListener('input', e => {buscar(e.target.value)})
}

function paginaAdmin() {
    return `
    <div class="relative">
    <div id="section-title" class="grid gap-3 grid-flow-col auto-cols-auto grid-flow-row auto-rows-min">
        <div id="cell-title" class="place-self-start">
            <h2 class="text-3xl xs:text-4xl dark:text-white mt-2">Empleados</h2>
        </div>
        
        <div id="cell-buscador" class="self-end place-self-end">
            <div class="bg-white dark:bg-gray-800">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-40 w-max-60 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2" placeholder="Buscar">
            </div>
            </div>
        </div>
    </div>
    </div>


    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cargo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Fecha de ingreso
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody id="body-tabla-empleados">
                <tr><td class="p-2">No hay elementos para mostrar.</td></tr>
            </tbody>
        </table>
    </div>

    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onclick="cargarFormNuevoEmpleado()">Nuevo empleado</button>
    
    <script>
        const buscador = document.getElementById('table-search')
        buscador.addEventListener('input', e => {
            console.log(e);
        })
    </script>
    `
}


function lineaEmpleado(emp) {
    return `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${emp.apellido + ', ' + emp.nombre}
            </th>
            <td class="px-6 py-3">
                ${emp.cargo}
            </td>
            <td class="px-6 py-3">
                ${emp.fecha_ing.toLocaleDateString()}
            </td>
            <td class="px-6 py-4">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-200 rounded-l-lg bg-blue-200 hover:bg-blue-100 text-gray-900 hover:text-blue-800 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    onclick="abrirDrawerVistaEmpleado(${emp.legajo})">
                    <span data-feather="eye" class="w-4 h-4"></span>
                </button>
                <button type="button"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border-t bg-green-200 border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-500 dark:focus:text-white"
                    onclick="cargarFormEditEmpleado(${emp.legajo})">
                    <span data-feather="edit" class="w-4 h-4"></span>
                </button>
                <button type="button" 
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border bg-red-200 border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white"
                    onclick="btnEliminarEmpleado(${emp.legajo})">
                    <span data-feather="trash-2" class="w-4 h-4"></span>
                </button>
                </div>
            </td>
        </tr>
    `
}

function contenidoTabla(empleados=getEmpleadosLS()){
    let listaHTML = ''

    if (empleados.length === 0) {
        listaHTML = `<tr><td class="p-2">No hay empleados que cumplan con el criterio buscado.</td></tr>`
    } else {
        empleados.forEach(emp => listaHTML += lineaEmpleado(emp));
    }

    document.getElementById('body-tabla-empleados').innerHTML = listaHTML
    cargarIconosFeather()
}

function buscar(texto) {

    if (texto === "") {
        contenidoTabla()
        return
    }

    const listaMostrar = []

    getEmpleadosLS().forEach( e => {
        const alcanceBusqueda = (e.nombre+ e.apellido + e.cargo).toUpperCase()
        if (alcanceBusqueda.includes(texto.toUpperCase())) { listaMostrar.push(e) }
    })

    contenidoTabla(listaMostrar);
}