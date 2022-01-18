

const $botonArray = document.querySelector('#botonArray')

$botonArray.onclick = function () {

    const arrayLista = document.querySelectorAll('li');
    const arrayOrdenado = []
    let numeroEnroque
    let numeroMayor = 0;
    let numeroMenor;
    let promedioAcumulador = 0;
    let CantidadRepetida = 0
    let promedio = 0
    let $muestraNumeroMasRepetido;
    let muestraMayor;
    let contador;
    //array creado para pasar el LI de texto a numero

    for (i = 0; i < arrayLista.length; i++) {

        arrayOrdenado.push(Number(arrayLista[i].textContent))

        console.log(arrayOrdenado)
    }

    //calcula el promedio
    for (i = 0; i < arrayOrdenado[i]; i++) {
        promedioAcumulador = promedioAcumulador + arrayOrdenado[i]
    }

    promedio = Math.floor(promedioAcumulador / arrayOrdenado.length)

    const $promedioHTML = document.querySelector('#promedio');
    $promedioHTML.textContent = `El promedio es ${promedio}`




    //ordenar de mayor a menor el array
    for (j = 0; j < arrayOrdenado.length; j++) {

        for (i = 0; i < arrayOrdenado.length; i++) {

            if (arrayOrdenado[i] < arrayOrdenado[i + 1]) {
                numeroEnroque = arrayOrdenado[i + 1]
                arrayOrdenado[i + 1] = arrayOrdenado[i]
                arrayOrdenado[i] = numeroEnroque

            }

        }
        console.log(arrayOrdenado)
    }


    //Muestra el numero mayor

    for (i = 0; i < arrayOrdenado.length; i++) {

        if (arrayOrdenado[i] > numeroMayor) {
            numeroMayor = arrayOrdenado[i]
        }
        console.log(numeroMayor)
    }

    const $NumeroMayor = document.querySelector('#NumeroMayor')
    $NumeroMayor.textContent = `El número más grande es ${numeroMayor}`;

    //Muestra el numero menor
    numeroMenor = numeroMayor

    for (i = 0; i < arrayOrdenado.length; i++) {
        if (arrayOrdenado[i] < numeroMenor) {
            numeroMenor = arrayOrdenado[i]
        }
        console.log(numeroMenor)
    }

    const $muestraNumeroMenor = document.querySelector('#numeroMenor')
    $muestraNumeroMenor.textContent = `El número más pequeño es ${numeroMenor}`;

    //muestra el numero repetido

    for (i = 0; i < arrayOrdenado.length; i++) {


        for (j = 0; j < arrayOrdenado.length; j++) {


            if (arrayOrdenado[j] == arrayOrdenado[i]) {

                contador++
            }

            if (contador > CantidadRepetida) {

                CantidadRepetida = contador
                muestraMayor = arrayOrdenado[i]
            }


        }

        contador = 0
    }

    $muestraNumeroMasRepetido = document.querySelector('#numeroRepetido')
    $muestraNumeroMasRepetido.textContent = `El número más frecuente es: ${muestraMayor}`

}


const $botonReset = document.querySelector('#reset')

$botonReset.onclick = function () {

    let $Promedioborrado = document.querySelector('#promedio')
    let $MayorBorrado = document.querySelector('#NumeroMayor')
    let $MenorBorrado = document.querySelector('#numeroMenor')
    let $RepetidoBorrado = document.querySelector('#numeroRepetido')

    $Promedioborrado.textContent = ` `
    $MayorBorrado.textContent = ` `
    $MenorBorrado.textContent = ` `
    $RepetidoBorrado.textContent = ` `



}

