function buscaMayor(elemento){
    let Mayor = elemento[0].value
    
    for(i=0;i<elemento.length;i++){
       
        if(elemento[i].value >Mayor){
            Mayor = elemento[i].value
        }

    }

    return Mayor
}

function buscaMenor(elemento){
    let Menor = elemento[0].value
    
    for(i=0;i<elemento.length;i++){
       
        if(elemento[i].value<Menor){
            Menor = elemento[i].value
        }

    }
    return Menor
}

function promedio(elemento){
    let promedio = 0
    for(i=0;i<elemento.length;i++){
        promedio= promedio + Number(elemento[i].value)
    }

    return Math.floor(promedio/elemento.length)
}