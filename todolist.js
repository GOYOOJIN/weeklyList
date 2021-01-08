const todoform = document.querySelector(".js-todoform"),
todoinput = todoform.querySelector("input"),
todolists = document.querySelector(".js-todolists");

const TODOS = "todos";
const todoarr = [];

function dropTodo(){
  
}

function writeTodos(todos){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  let Id = Date.now();  
  delBtn.innerText = "F";
  delBtn.addEventListener("click", dropTodo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = Id;
  todolists.appendChild(li);
  const todoObj = {
    text: text,
    id: Id
  };
  todoarr.push(todoObj);
  saveTodos();
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
  const loadTodos = localStorage.getItem(TODOS);
  if(loadTodos != null){
    const jsonTodo = JSON.parse(loadTodos);
    jsonTodos.forEach(function(Todo){
      writeTodos(Todo.text);
    })
  }
}

function init(){
  loadTodos();
  todoform.addEventListener("submit", handleSubmit);
}
init();