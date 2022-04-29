// Operador AND && // AND Verdarero o falso 
let a= 2;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else {
    console.log("Fuera de rango");
}
// Operadpr OR || Regresa true si culquiera operando es true

let vacaciones = false, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego");
}
else{
    console.log("Padre no podra asisitar al juego");
}

// operador Ternario
let resultado= (3>2) ? "Verdadero": "Falso";
console.log (resultado)

let numero = 9;// si el numero es divisible entre  2 es  regresa a  0
resultado = ( numero % 2 == 0) ? "Numero par": " Numero impar";
console.log( resultado);


// Convertir de String a Number

let miNumero = "18";

//console.log(typeof miNumero)

let edad = Number(miNumero);
//console.log (typeof edad);
if (edad >= 18 ){
    console.log ( "La persona puede votar");
}
else{
    console.log( "La persona es muy joven para votar")
}

let resultado1 = (edad >=18 )? "Puede votar" :  " Muy joven para votar";
console.log(resultado1)

// Funcion isNaN saber si la variable es un numero 

let miNumero2 = "18x";

//console.log(typeof miNumero1)

let edad1 = Number(miNumero2);
console.log (edad1);

if( isNaN (edad1)){
    console.log("no es es un numero")
}
else {
    if (edad1 >= 18 ){
    console.log ( "La persona puede votar");
}
else{
    console.log( "La persona es muy joven para votar")
}

}

if (edad1 >= 18 ){
    console.log ( "La persona puede votar");
}
else{
    console.log( "La persona es muy joven para votar")
}



let resultado2 = (edad >=18 )? "Puede votar" :  " Muy joven para votar";
console.log(resultado2)

// Ejemplos de precendencia de Operadores

let x = 5
let y = 10;
let z = ++x + y--;

console.log (x)
console.log(y)
console.log(z)

let resultado4 = 4 + 5 * 6 / 3;
console.log(resultado4)

resultado4= (4+5)*6/3;
console.log(resultado4)