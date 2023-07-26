const ciudad1 = "Bgota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//Definicion de una lista con tipo de datos alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDisponibles);

//Definicion de una lista de forma abrebiada 
const paisesDisponibles =["Colombia", "Peru","Chile","Argentina","Brasil"];
console.log(paisesDisponibles);


//push funcion que nos ayuda a insertar elemento al final de un arreglo
paisesDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");
console.log(paisesDisponibles);
console.log(ciudadesDisponibles);

//unshift funcion que nos ayuda a insertar elemento al principio de un arreglo
paisesDisponibles.unshift("Ecuador");
ciudadesDisponibles.unshift("Quito");
console.log(paisesDisponibles);
console.log(ciudadesDisponibles);

//Mostrando Pirmer elemento de la lista 
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

paisesDisponibles.splice(1,2,"Venezuela", "Paraguay");
console.log(paisesDisponibles);


