let arreglo1=['carlos','vazques',8964738,75.000]

const funcion1 = (escrito,escrito3)=>{
    arreglo1.push(escrito,escrito3);
    return arreglo1
    
}

const funcion2=(num1,num3)=>(num1+num3)*num3


const resultado =(entrada1,entrada2,funcion)=>{
    return funcion(entrada1,entrada2);
}


console.log(`la primera funcion con el arreglo ${resultado(7489,'beneficiario',funcion1)}`)
console.log("segunda funcion sin el return "+resultado(8,7,funcion2))