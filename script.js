//Change Mode
function changeCss() {
  let css = document.getElementById("css");
  if (css.getAttribute("href") == `./light.css`) {
    css.href = `./orange.css`;
  } else if (css.getAttribute("href") == `./orange.css`) {
    css.href = `./dark.css`;
  } else {
    css.href = `./light.css`;
  }
}

//Convertor

function convert(inputId) {
  let rate = 39.5;
  let dollarsInput = document.getElementById("dollars");
  let hryvniasInput = document.getElementById("hryvnias");

  if (inputId === "dollars") {
    let dollars = dollarsInput.value;
    if (dollars != "") {
      hryvniasInput.value = (dollars * rate).toFixed(2);
    }
  } else if (inputId === "hryvnias") {
    let hryvnias = hryvniasInput.value;
    if (hryvnias != "") {
      dollarsInput.value = (hryvnias / rate).toFixed(2);
    }
  }
}

//Hamb menu
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}