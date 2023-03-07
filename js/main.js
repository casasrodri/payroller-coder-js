function refreshPage(){
    window.location.reload();
}

function screenSize() {
    // Fuente: https://stackoverflow.com/a/11744120
    const docElem = document.documentElement
    const body = document.getElementsByTagName('body')[0]

    x = window.innerWidth || docElem.clientWidth || body.clientWidth,
    y = window.innerHeight || docElem.clientHeight || body.clientHeight

    return {w: x, h: y}
}

