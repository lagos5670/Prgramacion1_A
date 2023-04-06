/* vamos a declarar vairbales y signamos un valor 
var nombre;
var apellido;
var edad;
var ciudad;
var carrera;*/

/*vamos a declara la funcion prompt  almacenar texto y valor
nombre = prompt("Ingresar tu nombre", "valor")
apellido= prompt("Ingresar tu Apellido");
edad= prompt("Ingresar tu edad");
ciudad= prompt("Ingresar tu Ciudad");
carrera= prompt("Ingresar tu Carera universitaria");*/

/*el alert lo suamos para mandar un alerta en pantalla
alert("Tu nombre es: " +nombre);
alert("Tu edad es: " +edad);*/

/*en caso de que no quieras una aletar en panalla la funcion que vaosa  usar es document.write();
document.write("Tu Nombre es: " +nombre +"<br/>" +"Tu Edad es: "+ edad);*/

/*Otra manera de visualizar la  informacion que hayas guarado en una vriables es usando console.log();
de esat menara solo podras visaulizar la informacion en modo consola del navegador
console.log(nombre);
console.log(edad);*/

/*¡ARREGLOS! -->conjunto de elementos almacenados en un solo lugar 
var amigos = ["camilo","lagos","20","pasto","ingenieria"];
document.write(amigos[0] +"<br/>" +amigos[1] +"<br/>");
document.write(amigos[2] +"<br/>");
document.write(amigos[3] +"<br/>");
document.write(amigos[4] +"<br/>");*/

/*como modifciar un arreglo 
amigos[0]= "Brayan";
document.write(amigos[0,1,2,3,4]);*/

/*vamos a usar la propiedad length()
document.write("Tienes " +amigos.length +" Datos Registrados");*/

/*como agregar datos dinamicamente con un arreglo
amigos[amigos.length]="Brayan";
amigos[amigos.length]="Santacruz";*/

/*¡OTRA FORMA DE AGREGAR DATOS DINAMICOS!
usando el metodo push nos ayuda que cada dato que se
ingrese ira directante la final del arreglo
amigos.push("Brayan","Santacruz");*/

/*como eliminamos un dato de un arreglo con el metodo pop
amigos.pop();*/

/*Si queremos unir dos arreglos lo aremos de esta forma 
con el metodo concat
var amigos2 =["luis","alejandro"];
var amigos3 = amigos.concat(amigos2);*/

/*el metodo join recibe dentro un parametro sea puntos numeros o caracteres
document.write(amigos.join(" : "));*/

/*Como ordenar nuestro elementos con el metodo sort
var odenados = amigos.sort();
document.write(odenados);*/


/*var nombre ="Arturo",
    edad = 20;*/  
//¡CONDICIONALES!
/*if(nombre == "Carlos"){
    document.write("Bienvenido " +nombre);
}else {
    document.write("Bienvenido Anonimo");}*/
/*if(edad >= 18 && nombre=="Carlos"){
    document.write("Eres mayor de edad " +nombre);
}else{
    document.write("Eres menor de edad " +nombre);
}*/

/*if(edad >= 18 || nombre =="Carlos"){
    document.write("Eres mayor de edad ");
}else{
    document.write("Eres menor de edad ");
}*/

//CONDICION CON FUNCION TRUE O FALSE === significa que se compara una cadenad detexto con un dato entero
/*if(edad==="18"){
    document.write("ok");
}else{
    document.write("flase");
}*/

//Ciclo for en javascript
/*var numerousuarios=50
var dias =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

for(i=0; i<= dias.length -1; i++){
    document.write("numero : " +dias[i] +"</br>")
}
var i = 0;
var numeridias = dias.length -1;
while(i <= numeridias){
    document.write("El numero es: " +dias[i] +"</br>")
    i++;
}*/

//funcion
/*function saludo(nombre){
    document.write("ten un gran dia " + nombre);
}
saludo("Brayan");*/
/*function suma(numer1, numero2){
    var numer1= numer1;
    var numero2=numero2
    var resultado=numer1+numero2
    //document.write("la suma es: " + resultado )
    //el document.wirte lo reemplazmos por un return 
    return resultado;
}
document.write("La suma es: "+suma(3,10) +"</br>");

document.write("La suma es: "+suma(5,40));*/

function numeroM(n1,n2){
    if(n1 > n2){
        return n1;
    }else{
        return n2; }
}
document.write("El número Maximo es: "+numeroM(30,9));

