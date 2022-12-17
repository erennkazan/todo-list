const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1 ];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ //tüm event listenerlar
    form.addEventListener("submit",addTodo);

    
}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    addTodoToUI(newTodo);







    e.preventDefault();
}
//list item oluşturma
function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
//link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className ="delete-item";
    link.innerHTML = " <i class='fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //text node ekle
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todo liste list item ekle

    todoList.appendChild(listItem);
    todoInput.value = "";


}

// <li class="list-group-item d-flex justify-content-between">
//                             Todo1
//                             <a href="#" class="delete-item">
//                                 <i class="fa fa-remove"></i>
//                             </a>
//                         </li>



