//  Tipo de dato string
var nombre = "Jose";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);
// Tipo de dato numerico
var numero= 1000;
console.log(numero);

// Tipo de dato objetc

var objecto ={
    nombre:"Juan",
    apellido:"Perez",
    telefono:"12452546"
}

console.log(objecto);

// Tipo de dato booleano (true,false)

var bandera = true
var bandera1 = false
console.log(bandera)
console.log(bandera1)

// Tipo de dato  function

function miFuncion (){}

console.log(miFuncion);

// Tipo de dato Symbol

var simbolo = Symbol("mi simbolo");

console.log(simbolo);

// Tipo clase es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido= apellido;        
    }
  }

console.log(Persona);

// Tipo de dato undefined

var x;
console.log (x);

// Tipo de palabra null = aucencia de valor

var y= null;
console.log(y);

// Tipo de datos ARRAY y Empty String = arreglo a tipo string

var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z= '';

console.log(z);
console.log(typeof z);

