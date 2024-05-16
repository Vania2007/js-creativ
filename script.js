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
