function cargarSeccionLiquidacion() {
    // Carga una vista para mostrar el recibo del empleado seleccionado
    document.getElementById('canvas-contenido').innerHTML = cargarSelectorEmpleado()
    cargarEmpleadosDesplegableLiquidacion()
}

function cargarSelectorEmpleado() {
    // Carga un selector desplegable de empleados para generar su liquidación en el mes actual.
    return `
    <div id="selector-empleado"
        class="p-2 border rounded-md border-gray-300 dark:border-gray-600 mt-4 text-gray-800 dark:text-white max-w-xl place-self-center">

        <div class="mb-3">
            <label for="empleado"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empleado</label>
            <select id="desplegable-empleado"
                class="shadow-sm dark:shadow-sm-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option></option>
            </select>
        </div>

        <div class="flex justify-end">
            <button type="button" id="btnGenerarRecibo" class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800" onclick="btnGenerarRecibo()">
                Generar
            </button>
        </div>
    </div>

    <div id="contenedor-recibo"></div>
    `
}

function cargarEmpleadosDesplegableLiquidacion() {
    // Agrega datos al desplegable con cada empleado existente en el sistema.
    opciones = '<option></option>'
    getEmpleadosLS().forEach( e => {
        opciones += `<option value="${e.legajo}">[${e.cargo}] ${e.nombre} ${e.apellido}</option>`
    })

    document.querySelector('#desplegable-empleado').innerHTML = opciones
}

function btnGenerarRecibo() {
    // Evalua que se seleccione un empleado y genera su liquidación y recibo.
    const legajo = document.querySelector('#desplegable-empleado').value

    if (legajo === '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Se debe seleccionar un empleado para liquidar.',
            showConfirmButton: false,
            timer: 2000
        })
        return
    }

    // Se genera el recibo y se muestra por pantalla
    contenidoRecibo(legajo)
}

function contenidoRecibo(legajo) {
    // Genera la estructura base de un recibo de sueldos, y luego llama al liquidador de sueldos
    const e = buscarEmpleado(legajo)

    document.getElementById('contenedor-recibo').innerHTML = `
    <div
        class="p-2 border rounded-md border-gray-300 dark:border-gray-600 mt-4 text-gray-800 dark:text-white max-w-xl">
        <div id="renglones" class="mx-2 text-sm">

            <div id="impresora" class="mr-2 float-right">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button"
                        class="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border bg-blue-200 border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        onclick="printReciboSueldo()">
                        <span data-feather="printer" class="w-4 h-4"></span>
                    </button>
                </div>
            </div>

            <div id="renglon1" class="text-center text-lg font-bold mb-4">
                RECIBO DE HABERES
            </div>

            <div id="renglon2" class="flex flex-row m-2 gap-3">
                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Empleador
                    </div>
                    <div class="basis-1/2 mt-1 ml-1">
                        PayRoller S.A.
                    </div>
                </div>

                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        CUIT
                    </div>
                    <div class="basis-1/2 mt-1 ml-1">
                        30-76600919-4
                    </div>
                </div>
            </div>

            <div id="renglon3" class="flex flex-row m-2 gap-3">
                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Empleado
                    </div>
                    <div id="nombre-empleado" class="basis-1/2 mt-1 ml-1">
                        ${e.nombre} ${e.apellido}
                    </div>
                </div>

                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Legajo
                    </div>
                    <div id="legajo-empleado" class="basis-1/2 mt-1 ml-1">
                        ${e.legajo}
                    </div>
                </div>
            </div>

            <div id="renglon4" class="flex flex-row m-2 gap-3">
                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Cargo
                    </div>
                    <div id="cargo-empleado" class="basis-1/2 mt-1 ml-1">
                        ${e.cargo}
                    </div>
                </div>

                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Modalidad
                    </div>
                    <div id="modalidad-empleado" class="basis-1/2 mt-1 ml-1">
                        ${e.modalidad}
                    </div>
                </div>
            </div>

            <div id="renglon5" class="flex flex-row m-2 gap-3">
                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Periodo liquidado
                    </div>
                    <div id="periodo-liquidado" class="basis-1/2 mt-1 ml-1">
                        ${mesLiquidacion()}
                    </div>
                </div>

                <div class="flex flex-col basis-1/2">
                    <div
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 basis-1/2 font-semibold p-1">
                        Fecha Ingreso
                    </div>
                    <div id="fechaingreso-empleado" class="basis-1/2 mt-1 ml-1">
                        ${e.fecha_ing.toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>

        <div id="tabla" class="max-w-full">
            <div class="pr-4 max-w-xl">
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-2 max-w-xl mt-4">
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-500 dark:text-white">
                        <tr>
                            <th scope="col" class="pl-2 py-2">
                                Concepto
                            </th>
                            <th scope="col" class="py-2">
                                Cnt.
                            </th>
                            <th scope="col" class="py-2 text-right">
                                Remunerativo
                            </th>
                            <th scope="col" class="py-2 text-right pr-2">
                                Descuentos
                            </th>
                        </tr>
                    </thead>
                    <tbody id="lineas-recibo">

                        
                    </tbody>
                </table>
            </div>

        </div>

        <div id="zona-firma" class="mt-3 mx-2 h-28 flex items-end place-content-end">
            <div id="firma"
                class="border-solid border-t-2 text-sm border-gray-300 dark:border-gray-600 text-center pt-1">
                <div class="font-semibold">Cr. Alan Turing</div>
                <div class="text-gray-400 dark:text-gray-300">Gerente de Recursos Humanos</div>
            </div>
        </div>

    </div>
    `
    cargarIconosFeather()
    generarImportesLiq(e)
}

function generarImportesLiq(empleado) {
    // Solicita al liquidador el recibo y totales de la liquidación del empleado elegido.
    const liquidador = new Liquidador(empleado)

    liquidador.setNovedades(novedadesLS)
    const lineasRecibo = liquidador.generarRecibo()
    const totales = liquidador.totales()

    agregarLineasRecibo(lineasRecibo)
    agregarTotales(totales)
}

const StyleFilaBlanca = 'border-b bg-white dark:bg-gray-900 dark:border-gray-700'
const StyleFilaGris = 'border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'

function agregarLineasRecibo(lineasRecibo) {
    // Agrega una linea al recibo renderizado, por cada concepto liquidado
    const tabla = document.getElementById('lineas-recibo')
    let nuevasLineas = ''
    let count = 0

    lineasRecibo.forEach( lin => {
        count += 1
        nuevasLineas += `
        <tr class="${isOdd(count) ? StyleFilaBlanca : StyleFilaGris}">
            <th scope="row"
                class="pl-2 py-2 text-gray-900 whitespace-nowrap dark:text-white font-medium">
                ${lin.concepto}
            </th>
            <td class="py-2">
                ${lin.cantidad}
            </td>
            <td class="py-2 text-right">
                ${lin.remunerativo}
            </td>
            <td class="py-2 text-right pr-2">
                ${lin.descuento}
            </td>
        </tr>
        `
    })
    
    tabla.innerHTML += nuevasLineas
}

function agregarTotales(totales) {
    // Agrega los totales al recibo de haberes renderizado
    const tabla = document.getElementById('lineas-recibo')

    tabla.innerHTML += `
    <!-- TOTALES -->
    <tr
        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-600 dark:text-white">
        <th scope="row"
            class="pl-2 py-2 text-gray-900 whitespace-nowrap dark:text-white font-bold">

        </th>
        <td class="py-2 font-bold">
            TOTALES
        </td>
        <td id="importe-remunerativos" class="py-2 text-right font-bold">
            ${totales.remunerativos}
        </td>
        <td id="importe-descuentos" class="py-2 text-right pr-2 font-bold">
            ${totales.descuentos}
        </td>
    </tr>

    <!-- NETO -->
    <tr
        class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-500 dark:text-white">
        <th scope="row"
            class="pl-2 py-2 text-gray-900 whitespace-nowrap dark:text-white font-bold">

        </th>
        <td class="py-2 font-bold">

        </td>
        <td class="py-2 text-right font-bold">
            NETO A COBRAR
        </td>
        <td id="importe-neto" class="py-2 text-right pr-2 font-bold">
            ${totales.neto}
        </td>
    </tr>
    `
}

function printReciboSueldo() {
    // Oculta los elementos exteriores, imprime y muestra nuevamente toda la interfaz, cambiando a modo claro de ser necesario
    document.querySelector('nav').classList.add('hidden')
    document.querySelector('aside').classList.add('hidden')
    document.querySelector('#selector-empleado').classList.add('hidden')
    document.querySelector('#impresora').classList.add('hidden')

    let color = 'light'
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'dark') {
            color = 'dark'
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            color = 'dark'
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }

    window.print()

    setTimeout(() => {
        document.querySelector('nav').classList.remove('hidden')
        document.querySelector('aside').classList.remove('hidden')
        document.querySelector('#selector-empleado').classList.remove('hidden')
        document.querySelector('#impresora').classList.remove('hidden')

        if (color === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }, 0)
}
