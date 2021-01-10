const clockdiv = document.querySelector(".js-clock"),
dateSpace = clockdiv.querySelector("h2"),
timeSpace = clockdiv.querySelector("h1");

function getDate(){  
  const date = new Date();
  //fconsole.log(date); //Sun Jan 03 2021 17:38:47 GMT+0900 (대한민국 표준시)
  const d = date.toString(); //문자열로 변환하여 substr사용.
  

  const day = d.substr(0,3); //Sun
  const month = d.substr(4,6); //Jan 02
  const year = d.substr(11,4); //2021
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  dateSpace.innerText = `${day} ${month} ${year}`;
  timeSpace.innerText = `${hour < 10 ? `0${hour}`: hour} :${minutes < 10 ? `0${minutes}`: minutes} :${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getDate();
  setInterval(getDate, 1000);
}
init();