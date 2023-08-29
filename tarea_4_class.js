/* 
crear una clase padre
crear una clase que herede de la clase padre
ambas clases deben tener minimo 2 metodos
debe recibir objetos (clases)
los objetos recibidos deben tener otro objeto como propiedad
*/
const placa={
    numero:"jkl78j",
    seguro:9873626,
    tecnomeca:{
        fechainicial:"23/06/2015",
        fechaexpedicion:"04/05/2016"
    }
}
const propietario={
    nombre:"jairo",
    apellido:"vazques",
    documento:{
        cc:187364893,
        fechanaci:"15/07/1996"
    }
}

const revision={
    encargado:"carlos",
    apellido:"martinez",
    entrada:{
        horaentra:"14:00 pm",
        horasalida:"19:12 pm"
    }
}
const repuestos={
    encargado:"sara",
    apellido:"garcia",
    pieza:{
        codigo:8849372,
        nombrepeza:"cilindro",
        precio:150.000
    }
}
class padre{
    constructor(placa,propietario){
        this.placa=placa;
        this.propietario=propietario;
    }
    modificar_datos(dato1){
        placa.numero=dato1
        return placa;
    }
    borrar_datos(dato2){
        propietario.nombre=dato2
        return propietario;
    }
}

class hijo extends padre{
    constructor(placa,propietario,revision,repuestos){
        super(placa,propietario)
        this.revision=revision;
        this.repuestos=repuestos;
    }
    ingresar_articulo(dato3){
        revision.entrada.horaentra=dato3;
        return revision
    }
    borrar_articulo(dato4){
        repuestos.pieza.precio=dato4;
        return repuestos
    }
}
const factura=new hijo(placa,propietario,revision,repuestos)
console.log(factura.modificar_datos("HYR45K"))

