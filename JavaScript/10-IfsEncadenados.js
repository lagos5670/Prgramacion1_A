const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 14;
let estadoAcompañado = true;
console.log(`Verificado pasaje: ${ciudadDestino}`);
if (edadPasajero >=18 || estadoAcompañado){
    if (ciudadesDisponibles.indexOf(ciudadDestino) >=0){
        //Evalumos si la ciudad esta disponible para viajar
        console.log("Pasaje disponible para la venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == "Lima"){
        console.log("Pasaje disponible par la venta");
    } else {
        console.log("Pasajero no cumple las reglas");
    }
    
}