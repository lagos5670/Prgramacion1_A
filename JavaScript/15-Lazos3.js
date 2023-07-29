//Mapa
const datos = [
    {
        'ciudad':'Bogota',
        'Precio': 500,
    },
    {
        'ciudad':'Lima',
        'Precio': 400,
    },
    {
        'ciudad':'Santiago',
        'Precio': 380,
    },
    {
        'ciudad':'Montevideo',
        'Precio': 200,
    },
];
let presupuestoDisponible = 400;
let i = 0;
//While repite 0 o más veces 

/*while(i < datos.length && datos[i].Precio > presupuestoDisponible){
    i++;
}
if(i == datos.length){
    console.log("No tenemos pasajes disponibles")
}else{
    console.log("Puedes comprar pasaje para: " +datos[i].ciudad+" = " +datos[i].Precio);
}*/
//Do while se repite 1 o más veces
ciudadSeleccionada = "";
/*do{
    if(datos[i].Precio <= presupuestoDisponible){
        const newLocal = ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
}while(i < datos.length && ciudadSeleccionada == "");
if(ciudadSeleccionada == ""){
    console.log("No tenemos pasajes disponibles")
}else{
    console.log("Puedes comprar pasaje para: " +ciudadSeleccionada +" = " +datos[i].Precio);
}*/

//For valor inicial para dar un valor final
for(let i = 0; i < datos.length && ciudadSeleccionada == ""; i++){
    if(datos[i].Precio <= presupuestoDisponible){
        const newLocal = ciudadSeleccionada = datos[i].ciudad;
    }
}
if(ciudadSeleccionada == ""){
    console.log("No tenemos pasajes disponibles")
}else{
    console.log("Puedes comprar pasaje para: " +ciudadSeleccionada +" = " +datos[i].Precio);
}