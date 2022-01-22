function creaArrayDeNumeros(Array) {
    let arrayOrdenado = []

    for (i = 0; i < Array.length; i++) {
        arrayOrdenado.push(Number(Array[i].textContent))
    }
    return arrayOrdenado
}

function ordenaArray(Array) {
    let numeroEnroque;

    for (j = 0; j < Array.length; j++) {
        for (i = 0; i < Array.length; i++) {
            if (Array[i] < Array[i + 1]) {
                numeroEnroque = Array[i + 1]
                Array[i + 1] = Array[i]
                Array[i] = numeroEnroque
            }
        }
    }
    return Array
}

function calculaPromedio(Array) {
    let promedioAcumulador = 0
    let promedio

    for (i = 0; i < Array[i]; i++) {
        promedioAcumulador = promedioAcumulador + Array[i]
    }
    promedio = Math.floor(promedioAcumulador / Array.length)
    return promedio
}

function buscaMayor(Array) {
    let numeroMayor = 0

    for (i = 0; i < Array.length; i++) {
        if (Array[i] > numeroMayor) {
            numeroMayor = Array[i]
        }
    }
    return numeroMayor
}

function buscaMenor(Array) {
    let numeroMenor = buscaMayor(Array)

    for (i = 0; i < Array.length; i++) {
        if (Array[i] < numeroMenor) {
            numeroMenor = Array[i]
        }
        console.log(numeroMenor)
    }
    return numeroMenor
}

function muestraNumeroRepetido(Array) {
    let contador = 0,
        cantidadRepetida = 0,
        muestraMayor;

    for (i = 0; i < Array.length; i++) {
        for (j = 0; j < Array.length; j++) {

            if (Array[j] == Array[i]) {
                contador++
            }
            if (contador > cantidadRepetida) {
                cantidadRepetida = contador
                muestraMayor = Array[i]
            }
        }
        contador = 0
    }
    return muestraMayor
}

const $botonArray = document.querySelector('#botonArray')

$botonArray.onclick = function () {
    const arrayLista = document.querySelectorAll('li')


    let arrayFinal = creaArrayDeNumeros(arrayLista)
    arrayFinal = ordenaArray(arrayFinal)
    document.querySelector('#promedio').textContent = `El promedio es ${calculaPromedio(arrayFinal)}`
    document.querySelector('#NumeroMayor').textContent = `El número más grande es ${buscaMayor(arrayFinal)}`;
    document.querySelector('#numeroMenor').textContent = `El número más pequeño es ${buscaMenor(arrayFinal)}`;
    document.querySelector('#numeroRepetido').textContent = `El número más frecuente es: ${muestraNumeroRepetido(arrayFinal)}`

    return 
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
