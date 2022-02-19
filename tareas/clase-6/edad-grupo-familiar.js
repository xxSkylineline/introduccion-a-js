/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#crear-campos').onclick = function (event) {
    event.preventDefault(); 
    let cantidadMiembros = Number(document.querySelector('#cantidad-miembros').value)
    borrarElementosHtml();
    crearIntegrantesYBotones(cantidadMiembros);
}

document.querySelector('#mostrar-info').onclick = function (event) {
    const muestraInfo = document.querySelector('#resultados');
    cambiarClases(muestraInfo,'');

    let arrayEdades = document.querySelectorAll('.edades');
    mostrarInfoEdades(arrayEdades);
   
    event.preventDefault();
}

document.querySelector('#reset').onclick = function (event){
    resetear();
    event.preventDefault
}



//////////////////////////////////////
function crearIntegrantesYBotones(cantidadMiembros){
    const muestraBoton = document.querySelector('#mostrar-info');
    const muestraReset = document.querySelector('#reset');
    const muestraDetalle = document.querySelector('#resultados');
    const agregainputSalario = document.querySelector('#salario-familiar');
    const contenedorGeneral = document.querySelector('#contenedor-grupo-familiar')
   
    if(cantidadMiembros>0){
        cambiarClases(contenedorGeneral, '')
        crearElementosHtml(cantidadMiembros);
        cambiarClases(muestraBoton, '');
        cambiarClases(muestraReset, '');
        cambiarClases(muestraDetalle, '');
        cambiarClases(agregainputSalario, '');
    }
    
}
//////////////////////////////////////
function borrarContenido(elemento, contenido){
    elemento.textContent = contenido;
}

//////////////////////////////////////
function cambiarClases(elemento, estado){
    elemento.className = estado;
}
//////////////////////////////////////
function crearElementosHtml(elemento) {
    let padreContenedor = document.querySelector('#contenedor-grupo-familiar');

    for (let i = 0; i < elemento; i++) {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'integrante';

        const label = document.createElement('label');
        label.textContent = `Integrante Nro ${i+1} : `;
        
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.className = 'edades';

        nodeDiv.appendChild(label);
        nodeDiv.appendChild(input); 
        
        padreContenedor.appendChild(nodeDiv);
    }
}

//////////////////////////////////////
function borrarElementosHtml(){
    const integrante = document.querySelectorAll('.integrante');
    for(i=0; i<integrante.length; i++){
        integrante[i].remove();
    }
}

function resetear(){
    document.querySelector('#cantidad-miembros').value = '';
    const ocultaCalcular = document.querySelector('#mostrar-info');
    const ocultaReset = document.querySelector('#reset');
    const contenidoMayor = document.querySelector('#edad-mayor');
    const contenidoMenor = document.querySelector('#edad-menor');
    const contenidoPromedio = document.querySelector('#promedio-edad');

    borrarElementosHtml()
    cambiarClases(ocultaCalcular,'oculto');
    cambiarClases(ocultaReset,'oculto');
    
    borrarContenido(contenidoMayor,'');
    borrarContenido(contenidoMenor,'');
    borrarContenido(contenidoPromedio,'');


}

function mostrarInfoEdades(valores){
    const muestraInfo = document.querySelector('#resultados');
    cambiarClases(muestraInfo,'');
    document.querySelector('#edad-mayor').textContent = `La edad Mayor es ${buscarMayor(valores)}`;
    document.querySelector('#edad-menor').textContent = `La edad Menor es ${buscarMenor(valores)}`;
    document.querySelector('#promedio-edad').textContent = `El promedio es de ${calcularPromedio(valores)}`;

}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector('#agregar-campo').onclick = function(event){
    event.preventDefault();
    const $divContenedor = document.querySelector('#salario-familiar');
    crearDiv($divContenedor);

    const $divSalarios = document.querySelector('#salarios-grupo-familiar');
    cambiarClases($divSalarios,' ');
}

document.querySelector('#quitar-campo').onclick = function(event){
    
    let salariosIntegrantes = document.querySelectorAll('.salario-familiar');
    eliminarCampo(salariosIntegrantes);
    event.preventDefault();
}

document.querySelector('#calcular-salario').onclick = function(event){
    event.preventDefault();
    let $salarios = document.querySelectorAll('.salario');
    pasarDeNodeListAArray($salarios);
    
    let mayor = document.querySelector('#salario-mayor');
    let menor = document.querySelector('#salario-menor');
    let promedioInfo = document.querySelector('#salario-promedio');
    
    let resultadosSalarios = document.querySelector('#resultados-salario');
    cambiarClases(resultadosSalarios,' ');

    mostrarInfoSalario(mayor,'Salario mayor ', buscarMayor($salarios));
    mostrarInfoSalario(menor,'Salario menor ', buscarMenor($salarios));
    mostrarInfoSalario(promedioInfo,'Salario promedio ', calcularPromedio($salarios));
}
/////////////////////////////////////////////////////////

function crearDiv(elemento){
    const $div= document.createElement('div');
    
    $div.className = 'salario-familiar';
    elemento.appendChild($div);

    const cantidadDivs = document.querySelectorAll('.salario-familiar');

    crearLabel($div, cantidadDivs);
    crearInput($div);
}

function crearLabel(elemento, valor){
    const $etiqueta = document.createElement('label');
    $etiqueta.textContent = `salario familiar #${valor.length}`;
    elemento.appendChild($etiqueta);
}

function crearInput(elemento){
    const $input = document.createElement('input');
    $input.setAttribute('type', 'number');
    $input.className = 'salario';
    elemento.appendChild($input);
}

function eliminarCampo(valor){
    for(let i = 0; i < valor.length; i++){
        if( i+1 == valor.length){
            valor[i].remove();
        }
    }
}

function pasarDeNodeListAArray(array){
    let nuevoArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].value !== ""){
            nuevoArray.push(Number(array[i].value));
        }
    }
    return nuevoArray;
}

function mostrarInfoSalario(elemento, frase, funcion){
 return elemento.textContent = `${frase} ${funcion} `;
}