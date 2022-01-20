const $botonArray = document.querySelector('#botonArray')
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

function creaArrayDeNumeros() {
    for (i = 0; i < arrayLista.length; i++) {

        arrayOrdenado.push(Number(arrayLista[i].textContent))

        console.log(arrayOrdenado)
    }

    return arrayOrdenado
}

function ordenaArray(){
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

    return arrayOrdenado
}

function calculaPromedio() {
    for (i = 0; i < arrayOrdenado[i]; i++) {
        promedioAcumulador = promedioAcumulador + arrayOrdenado[i]
    }

    promedio = Math.floor(promedioAcumulador / arrayOrdenado.length)

    return promedio
}

function buscaMayor() {
    for (i = 0; i < arrayOrdenado.length; i++) {

        if (arrayOrdenado[i] > numeroMayor) {
            numeroMayor = arrayOrdenado[i]
        }
        console.log(numeroMayor)
    }

    return numeroMayor
}

function buscaMenor() {
    numeroMenor = numeroMayor

    for (i = 0; i < arrayOrdenado.length; i++) {
        if (arrayOrdenado[i] < numeroMenor) {
            numeroMenor = arrayOrdenado[i]
        }
        console.log(numeroMenor)
    }

    return numeroMenor

}

function muestraNumeroRepetido() {
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

    return muestraMayor
}


$botonArray.onclick = function () {

    creaArrayDeNumeros()
    ordenaArray()
    document.querySelector('#promedio').textContent = `El promedio es ${calculaPromedio()}`
    document.querySelector('#NumeroMayor').textContent = `El número más grande es ${buscaMayor()}`;
    document.querySelector('#numeroMenor').textContent = `El número más pequeño es ${buscaMenor()}`;
    document.querySelector('#numeroRepetido').textContent = `El número más frecuente es: ${muestraNumeroRepetido()}`

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
