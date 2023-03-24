function cargarNovedadesAdmin() {
    document.getElementById('canvas-contenido').innerHTML = paginaNovedadesAdmin()
    // Se cargan los datos de TODAS las novedades
    contenidoTablaNovedades()
}

function paginaNovedadesAdmin() {
    return `
    <div class="relative">
    <div id="section-title" class="grid gap-3 grid-flow-col auto-cols-auto grid-flow-row auto-rows-min">
        <div id="cell-title" class="place-self-start">
            <h2 class="text-3xl xs:text-4xl dark:text-white mt-2">Novedades</h2>
        </div>
    </div>
    </div>

    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Empleado
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Novedad
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Tipo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cantidad
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody id="body-tabla-novedades">
                <tr><td class="p-2">No hay elementos para mostrar.</td></tr>
            </tbody>
        </table>
    </div>
    `
}

let novedadesList = []

novedadesList.push(new Novedad(10, 'Licencia', 'Matrimonio', 10))
novedadesList.push(new Novedad(11, 'Horas', '50%', 22))

function lineaNovedad(nov, index) {
    return `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${nov.empleado.apellido + ', ' + nov.empleado.nombre}
            </th>
            <td class="px-6 py-3">
                ${nov.novedad}
            </td>
            <td class="px-6 py-3">
                ${nov.tipo}
            </td>
            <td class="px-6 py-3">
                ${nov.cantidad}
            </td>
            <td class="px-6 py-4">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" 
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border bg-red-200 border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white"
                        onclick="btnEliminarNovedad(${index})">
                        <span data-feather="trash-2" class="w-4 h-4"></span>
                    </button>
                </div>
            </td>
        </tr>
    `
}

function contenidoTablaNovedades() {
    if (novedadesList.length === 0) { return }

    let listaHTML = ''
    let index = 0

    novedadesList.forEach(nov => {
        listaHTML += lineaNovedad(nov, index)
        index += 1
    });

    document.getElementById('body-tabla-novedades').innerHTML = listaHTML
    cargarIconosFeather()
}

function btnEliminarNovedad(index) {
    alert(`Se intenta eliminar el ${index + 1} renglón.\n\n${novedadesList[index]}`)
}