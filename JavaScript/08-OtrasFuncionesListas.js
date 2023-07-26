const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

const paisesDisponibles = ["Colombia", "Peru","Chile","Argentina","Brasil", "Uruguay", "Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${cantidadCiudades.length} elementos`);
//Remover el Ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${cantidadCiudades.length} elementos`);

//Filtro de elementos de la lista
//const paisesFiltrados = paisesDisponibles.filter((e) => e == "Brasil");
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Unificar los elementos en una cadena 
console.log(paisesDisponibles.join('-'));

//Ordenar la lista
console.log(paisesDisponibles.sort());

//Reconociendo la posición
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf("Peru")}`);

//Unidificar dos listas
const paisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log("Lista de paises y ciudades:");
console.log(paisesYCiudades);
console.log("Lista de paises: ");
console.log(paisesDisponibles);