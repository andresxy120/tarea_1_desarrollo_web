
const alumnos1={
nombre:'sara',
apellido:'martinez',
examen:{
    notas:[3.7,3.8,2.9,3.0,1.2],
},

sumar:function(){
 let suma=0;
 this.examen.notas.forEach((element) => {
    
    suma+=element
})
return suma
},
calcular:function(){ return this.examen.notas.map((final)=>final+0.5);},
notaalta:function(){ return this.examen.notas.filter((alta)=>alta>3.0);},

};
const alumnos2={
    nombre:'Alejandro',
    apellido:'gomez',
    examen:{
        notas:[2.0,3.5,1.0,4,3.0],
    },
    
    sumar: function()
    {
     let suma=0;
     this.examen.notas.forEach((element) => {
        
        suma+=element
    })
     return suma
    },
    calcular:function(){return this.examen.notas.map((final)=>final+0.5);},
    notaalta: function(){return this.examen.notas.filter((alta)=>alta>3.0);},
    
    };
    const alumnos3={
        nombre:'carlos',
        apellido:'vazques',
        examen:{
            notas:[4.8,3.0,4.2,2.9,3.1],
        },
        sumar: function()
        {
         let suma=0;
         this.examen.notas.forEach((element) => {
            
            suma+=element
        })
         return suma
        },
        calcular:function(){return this.examen.notas.map((final)=>final+0.5);},
        notaalta: function(){return this.examen.notas.filter((alta)=>alta>3.0);},
        };
let arrayobject=[];
arrayobject.push(alumnos1,alumnos2,alumnos3);
arrayobject.forEach((items)=>{
    console.log(items);
});