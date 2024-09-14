let button1 = document.getElementById("head-one");
let button2 = document.getElementById("head-two");

button1.addEventListener("click", open1);
button2.addEventListener("click", open2);

function open1() {
  let answer = document.getElementById("drop-one");
  button1.classList.toggle("openPlus");
  answer.classList.toggle("open");
}

function open2() {
  let answer = document.getElementById("drop-two");
  button2.classList.toggle("openPlus");
  answer.classList.toggle("open");
}
