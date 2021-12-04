const $botonCalcular = document.querySelector('.buttonCalcular');

$botonCalcular.onclick = function () {

    const horasReproducidas = document.querySelectorAll('.horas');
    const minutosReproducidos = document.querySelectorAll('.minutos');
    const segundosReproducidos = document.querySelectorAll('.segundos');

    let horasFinales = 0;
    let minutosFinales = 0;
    let segundosFinales = 0;

    for (i = 0; i < segundosReproducidos.length; i++) {
        segundosFinales = segundosFinales + Number(segundosReproducidos[i].value)
    }

    for (i = 0; i < minutosReproducidos.length; i++) {
        minutosFinales = minutosFinales + Number(minutosReproducidos[i].value)
    }

    for (i = 0; i < horasReproducidas.length; i++) {
        horasFinales = horasFinales + Number(horasReproducidas[i].value)
    }



    minutosFinales = minutosFinales + Math.floor(segundosFinales / 60);
    horasFinales = horasFinales + minutosFinales / 60;


    segundosFinales = segundosFinales % 60
    minutosFinales = minutosFinales % 60
    horasFinales = Math.floor(horasFinales)
    
    $tiempoInvertido = document.querySelector('#datosVideos')

    $tiempoInvertido.textContent = `El tiempo empleado para todos los videos es de ${horasFinales}:${minutosFinales}:${segundosFinales} `;



    return false;
}

