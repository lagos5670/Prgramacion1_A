const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 18;
let estadoAcompañado = true;
let tienePasaporte = true;
let estaCasado = false;
console.log("#############################################################");

console.log(`Verificado pasaje: ${ciudadDestino}`);
// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) >=0 && edadPasajero >=18 && tienePasaporte && !estaCasado){
    console.log("Pasaje Disponible para venta");
}else{
    console.log("Ciudad no Disponible o pasajero no cumple las reglas");
}

