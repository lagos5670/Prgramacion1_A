//Palabra const
//Espacio de memoria que luegi de asignar su valor no cambia en el tiempo 
const valorPasaje= 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "lacruz";
console.log(nombrePasajero );
console.log(apellidoPasajero);

//Palabra var 
//Espacio de memoria que pueda cambiar durante la ejecucion del programa
//El alcance 

var nombreCompletoDelPasajero = nombrePasajero + " " +apellidoPasajero;

//Bloque
{
    //Palabra let
    //Espacio de memoria que pueda cambiar durante la ejecucion del programa
    let nombreCompletoPasajero = nombrePasajero + " " +apellidoPasajero;
    console.log("variable con let: "+nombreCompletoPasajero);
    console.log("variable con var: "+nombreCompletoDelPasajero);
}
