window.setTimeout(minutoSeis, 360000);

function minutoSeis(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        width: '70%',
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        })
    Toast.fire({
        icon: 'info',
        title: '¡Ríndete! ¿Eres un fracasado?'
    })
}

