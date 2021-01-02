const form = document.querySelector(".js-nameform"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

//local에 저장할 KeyName
const USER = "userName",
      SHOW = "showing";


function saveName(inputName){
  localStorage.setItem(USER, inputName);
}

function handleSubmit(event){
  event.preventDefault();
  const inputName = input.value;
  writeName(inputName);
  saveName(inputName);
}

function writeName(name){
  //form 삭제하고 h2보여주기.
  form.classList.remove(SHOW);
  greeting.classList.add(SHOW);
  greeting.innerText = `Halo ${name}`
}

function askName(){
  //form 보여주고 이름 받기. 
  form.classList.add(SHOW);
  form.addEventListener("submit",handleSubmit);
}

function loadName() {
  const userName = localStorage.getItem(USER);
  if (userName === null) {
    askName();
  } else {
    writeName(userName);
  }
}

function init() {
  loadName();
}
init();
