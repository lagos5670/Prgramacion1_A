
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const preciosCiudad = new Array(500,400,380,200);
let presupuestoDisponible = 210;
let i = 0;
//While repite 0 o más veces 

while(preciosCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length){
    i++;
}
if(i == ciudadesDisponibles.length){
    console.log("No tenemos pasajes disponibles")
}else{
    console.log("Puedes comprar pasaje para: " +ciudadesDisponibles[i] +" = " +preciosCiudad[i]);
}
//Do while se repite 1 o más veces
/*do{
    i++;
}while(preciosCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length);*/