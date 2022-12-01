const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');
let btnIg = document.getElementById('iconIg');
let btnYt = document.getElementById('iconYt');
let btnSpty = document.getElementById('iconSpty');
let btnNoise = document.getElementById('noise');

const btnGym = document.getElementById("modeGym");
const btnStudy = document.getElementById("modeStudy");

let gym;
let study;
let modeGym = document.getElementById('content-nav1');
let modeStudy = document.getElementById('content-nav2');
let modo = document.getElementById('modo');
let modo2 = document.getElementById('modo2');

if (modeGym.addEventListener('click', function () {
    modeGym.style.background = "#0a0a0a";
    modo.style.color = "white";

    modeStudy.style.background = "white";
    modo2.style.color = "#0a0a0a";
    
    const Toast = Swal.mixin({
        toast: true,
        width: '40%',
        position: 'center-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Gym Mode '
    })
})){}

else if (modeStudy.addEventListener('click', function () {
    modeStudy.style.background = "#0a0a0a";
    modo2.style.color = "white";

    modeGym.style.background = "white";
    modo.style.color = "#0a0a0a";

    const Toast = Swal.mixin({
        toast: true,
        width: '60%',
        position: 'center-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Pomodoro Mode 45/15 '
    })

})){}

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');

    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}
const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}
const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const audioBell = document.getElementById('audioBell');

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    //const display_secondsAlert = parseInt(display_seconds);
    const display_minutes = total_minutes.toString().padStart(2, "0");
    console.log(total_seconds);
    const audioTictac = document.getElementById('audioTictac');

    // Cronometro para modo Gym, suena en 1 minuto como maximo de un ejercicio
    // El funcionamiento es sencillo, se temporiza por segundos. El segundo deseaso a ser el que active la campana del tiempo estimado tanto en modo gym como en modo estudio, debe ser restado en 6 para que concuerde con el setTimeout.
    while (total_seconds === 60 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
        }, 6000);
        break;
    }
    // Cronometro para modo Pomodoro1 45/15 60minutos
    while (total_seconds === 2700 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 3600 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }

    // Cronometro para modo Pomodoro2 45/15 120minutos
    while (total_seconds === 6300 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 7200 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 15000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Pomodoro 2: Logro diario desbloqueado ☺'
        })

        break;
    }
   
    // Cronometro para modo Pomodoro3 45/15 180minutos
    while (total_seconds === 9900 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 10800 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }

    // Cronometro para modo Pomodoro4 45/15 240minutos
    while (total_seconds === 13500 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 14400 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 15000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Pomodoro 4: Logro diario desbloqueado ☺'
        })

        break;
    }
   
    // Cronometro para modo Pomodoro5 45/15 300minutos
    while (total_seconds === 17100 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 18000 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }

    // Cronometro para modo Pomodoro6 45/15 360minutos
    while (total_seconds === 20700 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 21600 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 15000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Pomodoro 6: Logro diario desbloqueado ☺'
        })

        break;
    }
   
    // Cronometro para modo Pomodoro7 45/15 420minutos
    while (total_seconds === 24300 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 25200 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }

    // Cronometro para modo Pomodoro8 45/15 480minutos
    while (total_seconds === 27900 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Break de 15 minutos!',
                showConfirmButton: false,
                timer: 4000
            })
        }, 6000);
        break;
    }
    while (total_seconds === 28800 - 6) {
        audioTictac.currentTime = 0;
        audioBell.currentTime = 0;
        setTimeout(function sonidoMinutoUno() {
            audioTictac.play();
        }, 1000);
        setTimeout(function sonidoNo(){
            audioBell.play();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Fin del Break!',
                showConfirmButton: false,
                timer: 1000
            })
        }, 6000);
        Swal.fire({
            title: 'Buen trabajo!',
            text: 'Para continuar debes reiniciar el cronómetro',
            icon: 'success',
            footer: '<p id="footer-8horas">¡Has llegado a tu meta diaria de concentración! Y espero que quieras continuar ☺</p>'
        })
        break;
    }

    return `${display_minutes}:${display_seconds} `
}


// Eventos Click
btnIg.addEventListener('click', function (){
    window.open('https://www.todoist.com/', '_blank');
});

btnYt.addEventListener('click', function (){
    window.open('https://www.youtube.com/@xulianortiz?sub_confirmation=1', '_blank');
});

btnSpty.addEventListener('click', function (){
    window.open('https://open.spotify.com/playlist/0LIGbfzDIz1cOkDLm13Izm?si=c315297605c147eb', '_blank');
});

const noiseSong = document.getElementById('noiseSong');
btnNoise.addEventListener('click', function () {
    Swal.fire({
        title: '<h1 font-size="20px">🎧</h1>',
        text: 'El brown noise es un sonido envolvente que se mueve en graves frecuencias transmitiendo calma y concentración, ideal para estudiar.',
        footer: 'Conoce más acerca del ruido marrón...<a href="https://35mm.es/ruido-marron/">aquí</a>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#fa5454',
        confirmButtonText: '¡Quiero concentrarme!',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(function ruidoBrown() {
                noiseSong.currentTime = 0;
                noiseSong.volume = 1.0;
                noiseSong.play();
            }, 1000);
        } else if (result.dismiss){
            setTimeout(function volumen(){
                noiseSong.pause();
                noiseSong.currentTime = 0;
            });
        }
    })
});

