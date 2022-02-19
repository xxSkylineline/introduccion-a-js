/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonCreaCampos = document.querySelector('#creaCampos')

$botonCreaCampos.onclick = function (event) {
    let cantidadMiembros = Number(document.querySelector('#cantidadMiembros').value)
    borrarElementosHtml();
    crearIntegrantesYBotones(cantidadMiembros);
    event.preventDefault();
}

const $botonCalculaEdad = document.querySelector('#mostrarInfo')

$botonCalculaEdad.onclick = function (event) {
    const muestraInfo = document.querySelector('#resultados')
    cambiaClases(muestraInfo,'')

    let arrayEdades = document.querySelectorAll('.edades')
    muestraInfoEdades(arrayEdades)
   
    event.preventDefault()
}

document.querySelector('#reset').onclick = function (event){
    resetear()
    event.preventDefault
}



//////////////////////////////////////
function crearIntegrantesYBotones(cantidadMiembros){
    const muestraBoton = document.querySelector('#mostrarInfo')
    const muestraReset = document.querySelector('#reset')
    const muestraDetalle = document.querySelector('#resultados')
    const agregainputSalario = document.querySelector('#salarioFamiliar')
   
    if(cantidadMiembros>0){
        creaElementosHtml(cantidadMiembros)
        cambiaClases(muestraBoton,'')
        cambiaClases(muestraReset,'')
        cambiaClases(muestraDetalle,'')
        cambiaClases(agregainputSalario,'')
    }
    
}
//////////////////////////////////////
function borraContenido(elemento, contenido){
    elemento.textContent = contenido
}

//////////////////////////////////////
function cambiaClases(elemento, estado){
    elemento.className = estado
}
//////////////////////////////////////
function creaElementosHtml(elemento) {

    let padreContenedor = document.querySelector('#contenedorGrupoFamiliar')

    for (i = 0; i < elemento; i++) {
        const nodeDiv = document.createElement('div')
        nodeDiv.className = 'integrante'

        const creaLabel = document.createElement('label')
        creaLabel.textContent = `Integrante Nro ${i+1} : `
        
        const creaInput = document.createElement('input')
        creaInput.setAttribute('type', 'number')
        creaInput.className = 'edades'

        nodeDiv.appendChild(creaLabel)
        nodeDiv.appendChild(creaInput)    
        
        padreContenedor.appendChild(nodeDiv)
    }


}

//////////////////////////////////////
function borrarElementosHtml(){
    const integrante = document.querySelectorAll('.integrante')
    for(i=0; i<integrante.length; i++){
        integrante[i].remove()
    }
}

function resetear(){
    document.querySelector('#cantidadMiembros').value = '';
    const ocultaCalcular = document.querySelector('#mostrarInfo')
    const ocultaReset = document.querySelector('#reset')
    const contenidoMayor = document.querySelector('#edadMayor')
    const contenidoMenor = document.querySelector('#edadMenor')
    const contenidoPromedio = document.querySelector('#promedioEdad')

    borrarElementosHtml()
    cambiaClases(ocultaCalcular,'oculto');
    cambiaClases(ocultaReset,'oculto');
    
    borraContenido(contenidoMayor,'');
    borraContenido(contenidoMenor,'');
    borraContenido(contenidoPromedio,'');


}

function muestraInfoEdades(valores){
    const muestraInfo = document.querySelector('#resultados')
    cambiaClases(muestraInfo,'')
    document.querySelector('#edadMayor').textContent = `La edad Mayor es ${buscaMayor(valores)}`;
    document.querySelector('#edadMenor').textContent = `La edad Menor es ${buscaMenor(valores)}`;
    document.querySelector('#promedioEdad').textContent = `El promedio es de ${promedio(valores)}`;

}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector('#agregaCampo').onclick = function(event){
    const $divContenedor = document.querySelector('#salarioFamiliar')
    creaDiv($divContenedor)

    const $divSalarios = document.querySelector('#salarios-grupo-familiar')
    cambiaClases($divSalarios,' ')

    event.preventDefault
}

document.querySelector('#quitaCampo').onclick = function(event){
    const salariosIntegrantes = document.querySelectorAll('.salario-familiar')
    
    eliminarCampo(salariosIntegrantes)
   
    event.preventDefault
}

document.querySelector('#calcula-salario').onclick = function(event){
    let $salarios = document.querySelectorAll('.salario')
    corrigeArray($salarios)
    
    let mayor = document.querySelector('#salario-mayor')
    let menor = document.querySelector('#salario-menor')
    let promedioInfo = document.querySelector('#salario-promedio')
    
    let resultadosSalarios = document.querySelector('#resultados-salario')
    cambiaClases(resultadosSalarios,' ')

    muestraInfoSalario(mayor,'Salario mayor ', buscaMayor($salarios))
    muestraInfoSalario(menor,'Salario menor ', buscaMenor($salarios))
    muestraInfoSalario(promedioInfo,'Salario promedio ', promedio($salarios))


    event.preventDefault()
}
/////////////////////////////////////////////////////////

function creaDiv(elemento){
    const $div= document.createElement('div')
    
    $div.className = 'salario-familiar'
    elemento.appendChild($div)

    const cantidadDivs = document.querySelectorAll('.salario-familiar')

    creaLabel($div, cantidadDivs)
    creaInput($div)
}

function creaLabel(elemento,valor){
    const $etiqueta = document.createElement('label')
    $etiqueta.textContent = `salario familiar #${valor.length}`
    elemento.appendChild($etiqueta)
}

function creaInput(elemento){
    const $input = document.createElement('input')
    $input.setAttribute('type', 'number')
    $input.className = 'salario'
    elemento.appendChild($input)
}

function eliminarCampo(valor){
    for(i=0; i<=valor.length; i++){
        if(i+1 ==valor.length){
            valor[i].remove()
        }
    }
}

function corrigeArray(array){
    let nuevoArray = []

    for(i=0;i<array.length;i++){
        if(array[i].value !==""){
            nuevoArray.push(Number(array[i].value))
        }
    }
    return nuevoArray
}

function muestraInfoSalario(elemento,frase,funcion){
 
 return   elemento.textContent=`${frase} ${funcion} `
}
