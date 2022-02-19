function buscarMayor(elemento){
    let Mayor = elemento[0].value
    
    for(let i=0; i < elemento.length;i++){
        if(elemento[i].value > Mayor){
            Mayor = elemento[i].value
        }
    }
    return Mayor
}

function buscarMenor(elemento){
    let Menor = elemento[0].value
    
    for(let i=0; i < elemento.length; i++){  
        if(elemento[i].value < Menor){
            Menor = elemento[i].value
        }
    }
    return Menor
}

function calcularPromedio(elemento){
    let promedio = 0
 
    for(let i=0; i < elemento.length; i++){
        promedio= promedio + Number(elemento[i].value)
    }
    return Math.floor(promedio/elemento.length)
}