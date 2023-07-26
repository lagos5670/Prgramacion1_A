//Tipos de Datos 
//Alfanumerico
/*let nombrePasajero  ="Pedro Silva";
nombrePasajero ="Ramón Silva";*/

//Numérico
let valorBoleto = 1000;
const impusetoAeropuerto = 100;
const porcentajeTasaEmbargue = 60/100;
var gestionAgencia = 100;

//Lógicos (true,false)
let boletoActivo = true;

//Operaciones Aritmeticas
//suma
//let totalBoletos = valorBoleto + porcentajeTasaEmbargue + gestionAgencia;

//Orden de precedencia
//()
// * y /
// + y -
let totalBoletosForma2 = (valorBoleto + impusetoAeropuerto) + (valorBoleto + impusetoAeropuerto) * porcentajeTasaEmbargue + gestionAgencia;

console.log(totalBoletosForma2);

//Concatenación de texto
let nombrePasajero = "Leonardo";
let apellidoPasajero  ="Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = '1000'+ '12';
let multiplicacion = parseInt('1000') / parseFloat('10');
console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('ASSAAS')
console.log(noEsUnNumero);