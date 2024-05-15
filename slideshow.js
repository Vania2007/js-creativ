let indexValue = 0;
const img = document.getElementsByClassName("imgSlideshow");
for (let x = 0; x < img.length; x++) {
  img[x].style.display = "none";
}
img[0].style.display = "block";

function changeImage(n) {
  indexValue += 1;
  if (indexValue < 0) {
    indexValue = img.length - 1;
  } else if (indexValue >= img.length) {
    indexValue = 0;
  }
  for (let x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  img[indexValue].style.display = "block";
}

let timerAutoSlide;
function StartAutoSlide() {
  autoSlide = setInterval(function () {
    changeImage(1);
  }, 2500);
}
StartAutoSlide();
