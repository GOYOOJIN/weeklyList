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
  form.classList.remove(SHOW);
  greeting.classList.add(SHOW);
  greeting.innerText = `Halo ${name}`
}

function askName(){
  //form가져와서 이름 받고 제출. 
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
