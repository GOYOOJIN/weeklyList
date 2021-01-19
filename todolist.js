const todoform = document.querySelector(".js-todoform"),
todoinput = todoform.querySelector("input"),
todolists = document.querySelector(".js-todolists");

const TODOS = "todos";
const todoarr = [];

function writeTodos(inputTodo){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  let Id = Date.now();  
  delBtn.innerText = "F";
  delBtn.addEventListener("click", dropTodo);
  span.innerText = inputTodo;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = Id;
  todolists.appendChild(li);
  const todoObj = {
    text: inputTodo,
    id: Id
  };
  todoarr.push(todoObj);
  saveTodos();
}

function saveTodos(){  
  localStorage.setItem(TODOS, JSON.stringify(todoarr));  
}

function handleSubmit(event){
  event.preventDefault();
  const inputTodo = todoinput.value;
  console.log(inputTodo);
  writeTodos(inputTodo);
  todoinput.value = "";
}

function loadTodos(){
  const loadTodos = localStorage.getItem(TODOS);
  if(loadTodos != null){
    const jsonTodos = JSON.parse(loadTodos);
    jsonTodos.forEach(function(Todo){
      writeTodos(Todo.inputTodo);
    });
  }
}

function init(){
  loadTodos();
  todoform.addEventListener("submit", handleSubmit);
}
init();