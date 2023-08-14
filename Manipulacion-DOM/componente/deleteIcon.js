const deleteIcon = () => {
    //Necesitamos crear un template de un párrafo que reciba el contenido HTML y JavaScript sintaxis <p>${ }</p>
    /*const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;*/
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
};
const deleteTask = (evento2) => {
    /*console.log("eleminar tarea");
    console.log(evento2.target.parentElement);*/
    const parent = evento2.target.parentElement //la direccion de lo que queremos selecionar
    parent.remove(); //esto elmina 
};

//vamos a exportar deleteIcon
export default deleteIcon;

/*Lo que aprendimos en esta aula:
Utilizar import/export
Remover elementos del DOM con el método remove*/