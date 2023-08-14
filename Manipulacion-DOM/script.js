//Vamos a importar 
import checkComplete from "./componente/checkComponent.js";
import deleteIcon from "./componente/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
console.log(btn);
//Arrow function o funciones anonimas  (evento) =>
const createTask =  (evento) =>{
    evento.preventDefault();
    //Utilizar el método addEventListener para escuchar eventos de un elemento
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card")//Con estos elementos lo que hacemos es agreagar la clase que contiene los estilos en css
    //backticks
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");//le agregamos la clase para que los estilos en css identifiquene la etiqueta
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());//nos va amostrar el chek
    taskContent.appendChild(titleTask);//nos va amostrar el titulo
    //taskContent.appendChild(deleteIcon());
    //task.innerHTML = content; Le agregamos el contenido a la etiqueta de html
    //console.log(content);
    input.value = "";//limpiar input;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    /*Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método appendChild que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.
    Existen otros métodos que podemos utilizar para manipular nodos:

    insertBefore(padre, hijo): Coloca un nodo antes del otro
    replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
    removeChild(elemento): Remueve un nodo del árbol */
};
//listener
//Creamos un evento click
btn.addEventListener("click", createTask);
