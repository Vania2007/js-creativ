//Change Mode
let mode = ["dark", "light"];
let count = 0;
function changeCss() {
  let css = document.getElementById("css");
  css.href = `./${mode[count % 2]}.css`;
  count++;
}

//Convertor !

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
