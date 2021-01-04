const todoform = document.querySelector(".js-todoform"),
todoinput = todoform.querySelector("input"),
todos = todoform.querySelector("ul");

const TODOS = todos;
const todoarr = [];


function writeTodos(){
  
}

function saveTodos(todo){  
  localStorage.setItem(TODOS, JSON.stringify(todoarr));  
}

function handleSubmit(event){
  event.preventDefault();
  const todoinput = todoinput.value;
  writeTodos(todoinput);
  saveTodos(todoinput);
}

function loadTodos(){

}

function init(){
  loadTodos();
}
init();