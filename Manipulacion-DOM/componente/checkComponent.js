/*Lo que aprendimos en esta aula:

    Agregar la clase CSS utilizando el método toggle
    Utilizar el atributo parentElement para subir un elemento en el árbol del DOM
    Encontrar el objetivo del evento utilizando la propiedad target
    Utilizar IIFE
*/

const checkComplete = () => {
    const i = document.createElement("i");
    //i.classList.add("far fa-check-square icon");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
};
// Inmediately invoked function expression IIFE
const completeTask = (evento1) => {
    const element = evento1.target;
    //la funcion toggle nos ayuda a verificar sis existe o no la clase
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

//vamos a exportar checkComponent 
export default checkComplete;