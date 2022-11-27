window.setTimeout(minutoSeis, 360000);
window.setTimeout(minutoQuince, 900000);
window.setTimeout(minutoTreinta, 1800000); 
window.setTimeout(minutoCincuenta, 3000000);
window.setTimeout(minutoSesenta, 3600000);

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

function minutoQuince(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        width: '90%',
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        })
    Toast.fire({
        icon: 'info',
        title: 'Llevas 15 minutos ¿Eso te parece suficiente?'
    })
}

function minutoTreinta(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        width: '80%',
        showConfirmButton: false,
        timer: 15000,
        timerProgressBar: true,
        })
    Toast.fire({
        icon: 'info',
        title: '¿Cansado? Cansado ¿en serio?'
    })
}

function minutoCincuenta(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        width: '90%',
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        })
    Toast.fire({
        icon: 'success',
        title: 'Siéntete orgulloso, porque yo lo estoy de ti'
    })
}

function minutoSesenta(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        width: '100%',
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        })
    Toast.fire({
        icon: 'success',
        title: 'Estaré aquí en cualquier momento y en cualquier situación'
    })
}
