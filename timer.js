let date_in_future = new Date(2024, 5, 1);
let daysOutput = document.getElementById("days");
let hrsOutput = document.getElementById("hrs");
let minOutput = document.getElementById("min");
let secOutput = document.getElementById("sec");
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = date_in_future - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  daysOutput.innerHTML = (days < 10 ? "0" : "") + days;
  hrsOutput.innerHTML = (hours < 10 ? "0" : "") + hours;
  minOutput.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  secOutput.innerHTML = (seconds < 10 ? "0" : "") + seconds;
  if (distance < 1) {
    clearInterval(x);
    daysOutput.innerHTML = "00";
    hrsOutput.innerHTML = "00";
    minOutput.innerHTML = "00";
    secOutput.innerHTML = "00";
    document.getElementById("message").innerHTML =
      "Літні канікули розпочались!";
  }
}, 1000);
