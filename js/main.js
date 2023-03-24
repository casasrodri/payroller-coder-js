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

function clearLocalStorage() {
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
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// cargarNovedadesAdmin()