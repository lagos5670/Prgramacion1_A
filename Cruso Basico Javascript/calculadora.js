//document.getElementById esto no trae el resultado de inpunt que genemos en html
//parseFloat sirve para convetir cadenas de texto a datos enteros.
var suma = function (n1,n2){
var n1 = parseInt(document.getElementById("n1").Value);
var n2 = parseInt(document.getElementById("n2").Value);

var resultado = n1+n2;
return resultado;
}
