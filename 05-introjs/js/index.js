console.log("=======================================================");
console.log("3.soy el js de la pagina externa");
console.log("4. soy el cuarto js");
console.log("solo sigo siendo otro js");
console.log("=======================================================");
//1 - Variables / palabras reservadas :
/*var 
let 
const 
for 
while
*/
/*comentario 
de varias 
lineas*/
//Comentario de una sola linea 

//Declaracion de Variables 

var nombre ;

let email ;

//Asignacion del valor de la variable 

nombre = "German" ; 

email = "germanleiva123@gmail.com";

const DNI = 44444444 ;
console.log(nombre);
console.log(DNI);
console.log(email);
// Dos cosas a la vez (declaramos la variable y le damos su valor)


nombre = "pepe";

console.log(nombre);

console.log("=======================================================");

// arreglos o arrays 
//Indice :       0      1       2       3       4      5     6     7
let alumnos = ["pepe","Maria","juan","carlos","Ana","Luis","yona","mariano"];

console.log(alumnos);
console.log("El alumno en la posicion 4 con el indice 3 es: " + alumnos[7] );

console.log("=======================================================");

console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(alumnos[0]);
console.log(alumnos[7]);
console.log(alumnos[5]);
alumnos.push('bernardo')//se pueden agregar datos fuera del arreglo
let animal = 'perro' 
console.log(animal);
console.log(alumnos)

console.log("=======================================================");

//Variables booleanas 

let verdadero = true ;
let falso = false ;

// ejemplo

let compra = false ;
console.log(compra, verdadero, falso);

//Variables de tipo objetos 

let persona = {
    nombre : 'pepe',
    apellido: 'Perez',
    edad : 5,
    provincia : 'Misiones',
    Pais : 'Argentina'
}
console.log(persona.nombre, persona.provincia)

persona.dni = 555555555; //se pueden agregar datos fuera de la funcion.
persona.pasaporte = false;
console.log(persona)

console.log("=======================================================");

//Condicionales, dan la posibilidad de elegir. Se ejecutan cuando se cumple una funcion.

if(persona.edad > 18 ){
    console.log('Puede comprar bebidas alcoholicas')
}else{
    console.log('No puede comprar bebidas alcoholicas, tenés  ' + persona.edad , 'años');
}

console.log("=======================================================");


if(persona.pasaporte){
    console.log(`Puede viajar al exterior, que tu pasaporte es: ${persona.pasaporte}`)
}else{
    console.log(`No puede viajar al exterior ya que tu pasaporte es: ${persona.pasaporte}`)
}

console.log("=======================================================");

//Operadores Matematicos : + - / * .

let uno = 1300;
let dos = 3400;
let resultado = uno + dos ;
console.log(`El resultado de la suma de ${uno} + ${dos} es : ${resultado}`);

resultado = dos - uno ;

console.log(`El resultado es : ${resultado}`);

resultado = uno * dos ;

console.log(`Es resultado de la multiplicacion entre ${uno} y ${dos}  es igual a : ${resultado}`);

resultado = uno / dos ;
console.log(`El resultado de la division entre : ${uno} y ${dos} es igual a : ${resultado}`)

console.log("=======================================================");

//Operadores Logicos  &&(y) , || (o) , !(no).

let user = 'admin';
let password = '123456';
let face = false;
// todas las condicione4s deben cumplirse cuando:
if(user== 'admin' && password == '123456' && face == true ){
    console.log('Acceso Correcto, bienvenido a tu perfil de insta');
}else{
    console.log('Acceso Incorrecto, Usuario o Contraseña incorrecto');
}
//Solo una condicion debe cumplirse cuando : 
if(user== 'admin'|| password == '123456' || face == true ){
    console.log('Acceso Correcto, bienvenido a tu perfil de insta');
}else{
    console.log('Acceso Incorrecto, Usuario o Contraseña incorrecto');
} 


console.log("=======================================================");

let pasaje = false ;
console.log(!pasaje);

console.log("=======================================================");

let dato = '';
if(!dato){
    console.log('No hay datos');
}else{
    console.log('Hay datos');
}

