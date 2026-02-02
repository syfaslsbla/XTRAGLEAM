
const timer = document.getElementById("timer");

let hour = 12;
let min = 30;
let sec = 56;

setInterval(() => {
  sec--;

  if (sec < 0) {
    sec = 59;
    min--;
  }

  if (min < 0) {
    min = 59;
    hour--;
  }

  timer.innerText = `${hour} hrs ${min} mins ${sec} seconds`;
}, 1000);
