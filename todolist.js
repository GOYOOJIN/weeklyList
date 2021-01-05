const todoform = document.querySelector(".js-todoform"),
todoinput = todoform.querySelector("input"),
todolists = document.querySelector(".js-todolists");

const TODOS = "todos";
const todoarr = [];


function writeTodos(todos){
  
}

function saveTodos(todos){  
  localStorage.setItem(TODOS, JSON.stringify(todoarr));  
}

function handleSubmit(event){
  event.preventDefault();
  const todoinput = todoinput.value;
  writeTodos(todoinput);
  todoinput.value = "";
}

function loadTodos(){
  const loadTodos = localStorage.getItem(JSON.parse(TODOS));
  for(i=0; loadTodos.length; i++){
    writeTodos(loadTodos[i]);
  }
}

function init(){
  loadTodos();
  
}
init();