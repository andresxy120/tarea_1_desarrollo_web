// aclaracion de los diferentes varibles en javascript
var versioantigua;
let versionNueva;
const constante=2023;


let nombre ="Andres Fernando Chaverra Higuita";
console.log(nombre);
console.log(nombre.length)

let texto1="hola muy buenos dias";
let texto2=2023;

//concatenacion
console.log(texto1+" mi nombre es "+nombre+" y este año es "+texto2);

//interpolacion
console.log(`${texto1} mi nombre es ${nombre} y este año es ${texto2}`);

//condicionales 

let num=67;

if(num <= 99 && num > 9)
{
    console.log("el numero es de dos digitos")
}else{
    console.log("el numero es de un digito")
}

let numer=89;

if ((numer % 2)==0 || numer > 100){
    console.log(`este numero ${numer} es mayor a 100`);
}
else if((numer % 2)==0 || numer < 100){
    console.log("este numero "+numer+" es menor a 100");
}

const opcion=2

switch (opcion){
    case 1:
        console.log("consultar estado del vehiculo")
        break
    case 2:
        console.log("estaso de los pagos de multas")
        break
    case 3:
        console.log("historial del vehiculo")
        break
    case 4:
        console.log("datos de la licencia")
        break
    default:
        console.log("por favor seleccione las opciones")
}
//ciclos

for(let i=0;i<8;i++){
    console.log(i=i+2)
}


let o=0;
let k=250;
do{
    console.log(k=k-2);
    o++
}while(o<9)


let l=0
while(l<10){
    console.log(l=l*2);
    l++
}