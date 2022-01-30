/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

const $crearCampos = document.querySelector('#mostrarCampos')
const $botonCalcular = document.querySelector('#calculaEdad')
const $botonReiniciar = document.querySelector('#empezarDeNuevo')

$crearCampos.onclick = function () {
    let integrantes = document.querySelector('#cantidadIntegrantes').value

    if (integrantes < 0 || integrantes == "") {
        alert("Datos invalidos")
    } else {
        creaCamposYBoton(integrantes)
        $crearCampos.setAttribute('disabled', '')
    }

    return false
}



$botonCalcular.onclick = function () {
    let obtieneDatos = document.querySelectorAll('.edad')
    obtieneDatos = creaArray(obtieneDatos)


    document.querySelector('#edadPromedio').textContent = `El promedio de edades es de = ${calculaPromedio(obtieneDatos)}`
    document.querySelector('#edadMayor').textContent = `La edad mayor es = ${muestraEdadMayor(obtieneDatos)}`
    document.querySelector('#edadMenor').textContent = `La edad menor es = ${muestraEdadMeno(obtieneDatos)}`
    return false
}

function creaCamposYBoton(numero) {
    let nodo = document.querySelector('#edadGrupoFamiliar')

    for (i = 0; i < numero; i++) {
        let textoInput = document.createElement('label')
        textoInput.textContent = `Pariente ${i + 1} : `
        nodo.appendChild(textoInput)

        let espacioEntreCampos = document.createElement('br')
        nodo.appendChild(espacioEntreCampos)

        let inputEdades = document.createElement('input')
        inputEdades.setAttribute('type', 'number')
        inputEdades.classList.add('edad')

        nodo.appendChild(inputEdades)

        nodo.appendChild(espacioEntreCampos)
    }

    document.querySelector('#calculaEdad').setAttribute('class', '')
    document.querySelector('#empezarDeNuevo').setAttribute('class', '')

    return false
}

function calculaPromedio(elemento) {
    let acumulador = 0

    for (i = 0; i < elemento.length; i++) {
        acumulador = acumulador + elemento[i]
    }

    return Math.floor(acumulador / elemento.length)
}


function muestraEdadMeno(array) {
    let numeroMenor = muestraEdadMayor(array)

    for (i = 0; i < array.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = array[i]
        }
    }
    return numeroMenor
}

function muestraEdadMayor(array) {
    let numeroMayor = 0

    for (i = 0; i < array.length; i++) {
        if (array[i] > numeroMayor) {
            numeroMayor = array[i]
        }
    }
    return numeroMayor
}

function creaArray(array) {
    let arrayEdades = []

    for (i = 0; i < array.length; i++) {
        arrayEdades.push(Number(array[i].value))
    }
    return arrayEdades
}

$botonReiniciar.onclick = function () {
let $formEdad = document.querySelector('#inputEdad')
let $botonCreaCampos = document.querySelector('#mostrarCampos')
let $botonCalculaEdad = document.querySelector('#calculaEdad')
let $em = document.querySelectorAll('em')
document.querySelector('#edadGrupoFamiliar').remove()

$formEdad.reset()
$botonCreaCampos.removeAttribute('disabled')
$botonCalculaEdad.setAttribute('class','oculto')
$botonReiniciar.setAttribute('class','oculto')
vaciarEm($em)
return false
}

function vaciarEm(elemento){
    for(i=0;i<elemento.length;i++){
        elemento[i].textContent= " "
    }
return elemento[i]
}