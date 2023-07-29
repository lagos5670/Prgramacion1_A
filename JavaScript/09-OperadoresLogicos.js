//Operadores de comparación 

const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

//Palabra reservada if 
//Evalua una condición
console.log(`Verificando pasaje para: ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >=0){
    console.log("Pasaje Disponible para venta");
}else{
    console.log("Ciudad no Disponible");
}
console.log("#############################################################")
const valorPasaje = "1000";
if(valorPasaje == 1000){
    console.log("El pasaje cuesta 1000");
}

//Operadores Logicos
//Y(AND) - O(OR) - NO(NOT)
//AND = && Se deben cumplir las dos condiciones 
//OR = || Se debe cumplir una condición al menos 
// NOT = ! No se cumple la condición
console.log("#############################################################")
let edadPasajero = 17;
let estadoAcompañado = true;
console.log(`Verificando pasaje pora: ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >=0) && (edadPasajero >=18 || estadoAcompañado)){
    console.log("Pasaje Disponible para venta");
}else{
    console.log("Ciudad no Disponible o pasajero no cumple las reglas");
}

//Aplicando logica Negativa
console.log("#############################################################")
edadPasajero = 17;
estadoAcompañado = true;
if (!((ciudadesDisponibles.indexOf(ciudadDestino) >=0) && (edadPasajero >=18 || estadoAcompañado))){
    console.log("Pasaje Disponible para venta");
}else{
    console.log("Ciudad no Disponible o pasajero no cumple las reglas");
}

