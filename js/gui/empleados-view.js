
function contenedorCards(contenido) {
    // auto-cols-max
    return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gid-cols-4 2xl:grid-cols-5 auto-rows-auto grid-flow-dense gap-5 mt-3 "> 
        ${contenido}
    </div>
    `
}

function cardEmpleado(empleado) {
    return `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:brightness-125"
        data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example"
        data-drawer-placement="right" aria-controls="drawer-right-example">
        <a href="#">
            <img class="rounded-t-lg object-cover h-48 w-96" src="./assets/profile/${empleado.foto}.jpg" />
        </a>
        <div class="p-3">
            <a href="#">
                <h3 class="mb-0 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    ${empleado.nombre + ' ' + empleado.apellido}
                </h3>
            </a>
            <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                ${empleado.cargo}
            </p>
        </div>
    </div>
    `
}

function renderizarCardsEmpleados(setEmpleados) {

    let tarjetasEmpleados = ""
    setEmpleados.forEach((emp) => {
        tarjetasEmpleados += cardEmpleado(emp)
    })

    return contenedorCards(tarjetasEmpleados)
}

function cargarEmpleadosList() {
    document.getElementById('canvas-contenido').innerHTML = renderizarCardsEmpleados(getAllEmpleados())
    cargarIconosFeather()
}