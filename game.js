var content;
var winningCombinations;
var turn = 0;
var squaresFilled = 0;
window.onload = function () {
  winningCombinations = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];
  content = new Array();
  for (var i = 0; i <= 24; i++) {
    content[i] = "";
  }
};

function canvasClicked(canvasNumber) {
  let theCanvas = "canvas" + canvasNumber;
  let c = document.getElementById(theCanvas);
  let context = c.getContext("2d");
  if (document.getElementById("css").getAttribute("href") == `./light.css`) {
    context.strokeStyle = "black";
  } else if (
    document.getElementById("css").getAttribute("href") == `./dark.css`
  ) {
    context.strokeStyle = "white";
  }
  else if (
    document.getElementById("css").getAttribute("href") == `./orange.css`
  ) {
    context.strokeStyle = "orange";
  }
  if (content[canvasNumber - 1] == "") {
    if (turn % 2 == 0) {
      context.beginPath();
      context.moveTo(10, 10);
      context.lineTo(40, 40);
      context.moveTo(40, 10);
      context.lineTo(10, 40);
      context.stroke();
      context.closePath();
      content[canvasNumber - 1] = "X";
    } else {
      context.beginPath();
      context.arc(25, 25, 20, 0, Math.PI * 2, true);
      context.stroke();
      context.closePath();
      content[canvasNumber - 1] = "O";
    }
    turn++;
    squaresFilled++;
    checkForWinners(content[canvasNumber - 1]);
    if (squaresFilled == 25) {
      alert("Гра завершена!");
      location.reload(true);
    }
  } else {
    alert("це місце вже зайняте!");
  }
}

function checkForWinners(symbol) {
  for (var a = 0; a < winningCombinations.length; a++) {
    if (
      content[winningCombinations[a][0]] == symbol &&
      content[winningCombinations[a][1]] == symbol &&
      content[winningCombinations[a][2]] == symbol &&
      content[winningCombinations[a][3]] == symbol &&
      content[winningCombinations[a][4]] == symbol
    ) {
      alert(symbol + " виграли!");
      playAgain();
    }
  }
}

function playAgain() {
  y = confirm("Граємо ще?");
  if (y == true) {
    alert("OK!");
    location.reload(true);
  } else {
    alert("До зустрічі!");
  }
}
