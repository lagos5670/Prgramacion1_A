function encriptar(){
    let palabra  = document.getElementById("texto").value;/* getElementById nos ayuda retornar los elementos obtenidos en el sitio web ya se por un texarea o imput y el valor lo obtenemos de value */
    let tituloMensaje= document.getElementById("titulo-mensaje")
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("candado");
    let textoCifrado = palabra
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if(palabra.length != 0){
        palabra = textoCifrado;
        tituloMensaje.textContent="Texto Encriptado con Éxito";
        parrafo.textContent = "";
        muñeco.src="img/verificado.png";
    }else{
        muñeco.src="img/ingresar.png";
        alert("Deves Ingresar algun texto");
    }
}
/*otra manera de hacer el reemplazamineto*/
/*var contador = 0;
var palabra  = prompt("Ingresar el texto");
var contador ;
//este for no ayuda acontar la cantida de palabaras que hay en el arreglo
for(contador = 0; contador<=palabra.length; contador++){
    //este if no ayuda hacer la comparacion con el contador y la letra no la cambiara por letra clave 
     if(palabra.charAt(contador) === "e"){
        document.write("enter");

    }else if(palabra.charAt(contador) === "i"){
        document.write("imes");

    }else if(palabra.charAt(contador) === "a"){
        document.write("ai");

    }else  if(palabra.charAt(contador) === "o"){
        document.write("ober");

    }else if(palabra.charAt(contador) === "u"){
        document.write("ufat"); 

    }else{
        document.write(palabra.charAt(contador));
    }
}*/
        