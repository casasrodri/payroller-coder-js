const modal = document.getElementById('popup-rodri')

function abrirPopUp(icono, texto) {

    let svg = ''
    let color = ''

    switch (icono) {
        case 'alerta':
            svg = 'alert-circle'
            color = 'text-yellow-400 dark:text-yellow-200'
            break;
        case 'ok':
                svg = 'check-circle'
                color = 'text-green-400 dark:text-green-400'
                break;
        case 'error':
            svg = 'thumbs-down'
            color = 'text-red-400 dark:text-red-400'
        case 'cpu':
            svg = 'cpu'
            color = 'text-green-400 dark:text-green-400'
    }

    modal.querySelector('#svg-feather').innerHTML = `
    <span data-feather="${svg}"
    class="mx-auto mb-4  w-14 h-14 hover:scale-110 ${color}">
    </span>
    `
    modal.querySelector('#texto-popup').innerHTML = texto
    
    cargarIconosFeather()
    document.getElementById('display-popup-rodri').click()
}