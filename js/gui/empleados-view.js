function cargarEmpleadosList() {
    // Carga una vista con cada empleado existente, mostrado como tarjeta
    document.getElementById('canvas-contenido').innerHTML = renderizarCardsEmpleados(getEmpleadosLS())
    cargarIconosFeather()
}

function renderizarCardsEmpleados(setEmpleados) {
    // Genera tarjetas con cada empleado existente
    let tarjetasEmpleados = ""

    setEmpleados.forEach((emp) => {
        tarjetasEmpleados += cardEmpleado(emp)
    })

    return contenedorCards(tarjetasEmpleados)
}

function cardEmpleado(empleado) {
    // Devuelve una tarjeta HMTL con datos del empleado pasado por parámetro
    return `
    <div class="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:brightness-125"
        onclick="abrirDrawerVistaEmpleado(${empleado.legajo})"
    >

            <img class="rounded-t-lg object-cover h-48 w-96" src="./assets/profile/${empleado.foto}.jpg" />

        <div class="p-3">
                <h3 class="mb-0 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    ${empleado.nombre + ' ' + empleado.apellido}
                </h3>

                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    ${empleado.cargo}
                </p>            
        </div>
    </div>
    `
}

function contenedorCards(contenido) {
    // Genera una sección para mostrar cada tarjeta con datos del empleado
    return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gid-cols-4 2xl:grid-cols-5 auto-rows-auto grid-flow-dense gap-5 mt-3 "> 
        ${contenido}
    </div>
    `
}


// PANEL LATERAL DE VISUALIZACION DE EMPLEADOS

let legajoDrawer = document.getElementById('legajo-drawer')

function abrirDrawerVistaEmpleado(legajo) {
    // Abre un panel lateral con datos del empleado
    legajoDrawer.value = legajo

    cargarDatosEncabezadoDrawer()
    tablaDatosPersonales()

    document.getElementById('MostrarDrawer').click()
}

function rowClaveValor(clave, valor) {
    // Función auxiliar para generar cada fila de la tabla de datos (personales o laborales)
    return `
    <tr class="border-b border-gray-200 dark:border-gray-700">
        <th scope="row"
            class="px-2 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            ${clave}
        </th>
        <td class="px-6 py-3 max-w-full">
            ${valor}
        </td>
    </tr>
    `
}

// Tabs y estilos
const tabDatosPersonales = document.getElementById('tab-datos-personales')
const tabDatosLaborales = document.getElementById('tab-datos-laborales')

const estilosTabActiva = "inline-block p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
const estilosTabInactiva = "inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"

function cargarDatosEncabezadoDrawer(){
    // Carga la imagen y datos del empleado que se muestra en la vista lateral    
    const empleado = buscarEmpleado(legajoDrawer.value)

    document.getElementById('drawer-empleado-img').src = `./assets/profile/${empleado.foto}.jpg`
    document.getElementById('drawer-empleado-nombre').innerText = `${empleado.nombre} ${empleado.apellido}`
}

function tablaDatosPersonales(){
    // Muestra una tabla con los datos personales del empleado.
    const empleado = buscarEmpleado(legajoDrawer.value)

    tabDatosPersonales.classList = estilosTabActiva
    tabDatosLaborales.classList = estilosTabInactiva

    let filas = ''
    
    filas += rowClaveValor('DNI', empleado.dni)
    filas += rowClaveValor('Nombre', empleado.nombre)
    filas += rowClaveValor('Apellido', empleado.apellido)
    filas += rowClaveValor('Teléfono', empleado.telefono)
    filas += rowClaveValor('Fecha nacimiento', empleado.fecha_nacim.toLocaleDateString())
    filas += rowClaveValor('Edad', Math.floor(empleado.edad()))

    document.getElementById('tabla-visualizacion-datos').innerHTML = filas
}

function tablaDatosLaborales(){
    // Muestra una tabla con los datos laborales del empleado.
    const empleado = buscarEmpleado(legajoDrawer.value)

    tabDatosPersonales.classList = estilosTabInactiva
    tabDatosLaborales.classList = estilosTabActiva
    
    let filas = ''
    
    filas += rowClaveValor('Legajo', empleado.legajo)
    filas += rowClaveValor('Cargo', empleado.cargo)
    filas += rowClaveValor('Modalidad', empleado.modalidad)
    filas += rowClaveValor('Sueldo', "$" + empleado.sueldo)
    filas += rowClaveValor('Fecha ingreso', empleado.fecha_ing.toLocaleDateString())
    filas += rowClaveValor('Antigüedad', Math.floor(empleado.antiguedad()))

    document.getElementById('tabla-visualizacion-datos').innerHTML = filas
}