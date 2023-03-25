function refreshPage(){
    window.location.reload();
}

function screenSize() {
    // Determina el tamaño en píxeles de la pantalla
    // Fuente: https://stackoverflow.com/a/11744120
    const docElem = document.documentElement
    const body = document.getElementsByTagName('body')[0]

    x = window.innerWidth || docElem.clientWidth || body.clientWidth,
    y = window.innerHeight || docElem.clientHeight || body.clientHeight

    return {w: x, h: y}
}

function clearLocalStorage() {
    // Elimina el contenido del localStorage
    localStorage.clear()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Se vació el LocalStorage correctamente!'
      })

    setTimeout(() => {
        refreshPage()
      }, 3000);
}

String.prototype.toProperCase = function () {
  // Agrega un método a la clase String, para mostrarlos como "Nombre Propio"
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function isoString(fecha) {
  // Devuelve una fecha en formato 'YYYY-MM-DD'
  function pad(n) { return n < 10 ? '0' + n : n }
  return `${fecha.getUTCFullYear()}-${pad(fecha.getUTCMonth())}-${pad(fecha.getUTCDate())}`
}

function isOdd(num) { 
  // Evalua si un número es par(odd) o impar(even)
  return num % 2 == 0
}

function mesLiquidacion(){
  // Devuelve el mes y año actual
  const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]
  const hoy = new Date
  
  return meses[hoy.getMonth()] + ' ' + hoy.getFullYear()
}