export function valida(input){
    const tipoDeinput = input.dataset.tipo //input.dataset.tipo esto lo que nos retornara el data-tipo que tenemos designado en el input correpondiente
    //vamos a validar si existen as tipos de input
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](input)
    };
 
    if (input.validity.valida) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " ";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeinput, input);
    };
};

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];
const mensajesDeError = {
    nombre: {
        //valueMissing para encontrarlo que debemos hacer es ingresar a inpeccionar y le damos al comando $0.validity
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres, maximo 12 debe contener letra minúscula, una letra mayúscula, un numero y no puede contener caracteres especiales",
    },
    nacimiento:{
        valueMissing: "El campo fecha de nacimiento no puede estar vacio",
        customError: "Debes tener almenos 18 años de edad",
    },
    numero: {
        valueMissing: "El campo numero no puede estar vacio",
        patternMismatch: "El formato requerido XXXXXXXXXX 10 numeros"
    },
    ciudad: {
        valueMissing: "El campo ciudad no puede estar vacio",
        patternMismatch: "La ciudad debe contener de 4 a 40 caracteres"
    },
    departamento: {
        valueMissing: "El campo departamento no puede estar vacio",
        patternMismatch: "EL departamento debe contener de 4 a 50 caracteres"
    },

};
const validadores = {
    nacimiento: (input) => validarNacimiento(input)
};

function mostrarMensajeDeError(tipoDeinput, input){
    let mensaje = ""
    tiposDeErrores.forEach((error) => {
        if(input.validity[error]){
            console.log(tipoDeinput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeinput][error]);
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    });
    return mensaje;
};

/*const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur",(evento)=>{
    //evento blur
    validarNacimiento(evento.target);
});*/
 
function validarNacimiento(input){
    //vamos a acceder el valor de input
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){
        mensaje ="Debes tener almenos 18 años de edad"
    }
    //setCustomValidity metodos
    //En JavaScript también es posible tratar los errores de validación utilizando la propiedad validity del input
    input.setCustomValidity(mensaje)
}

function mayorEdad(fecha){
    //validamos que la persona sea mayor de edad
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}