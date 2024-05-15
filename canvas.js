let c = document.getElementById("canv");
let context = c.getContext("2d");
let w = (c.width = 550);
let h = (c.height = 550);
let position = [w / 2, h / 2];
let spacing = 24;
let numw = w / spacing;
let numh = h / spacing;

let draw = function (p) {
  context.fillStyle = "#222";
  context.fillRect(0, 0, w, h);
  context.fillStyle = "#efefef)";
  context.strokeStyle = "#efefef";
  for (let i = 0; i < numh; i++)
    for (let j = 0; j < numw; j++) {
      let diagnalW = j * spacing + (i % 2 ? 0 : spacing / 2);
      let diagnalH = i * spacing;
      var arr = [position[0] - diagnalW, position[1] - diagnalH],
        wave = Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]),
        arr = [arr[0] / wave, arr[1] / wave],
        angle = 50 * (Math.cos(p / 360 - wave / 105) - 1);
      context.beginPath();
      context.arc(
        diagnalW + arr[0] * angle,
        diagnalH + arr[1] * angle,
        2.8,
        0,
        2 * Math.PI,
        false
      );
      context.closePath();
      context.fill();
      for (let n = 0; n < 5; n++) {
        let tail = 50 * (Math.cos((p - 50 * n) / 360 - wave / 105) - 1);
        context.beginPath();
        context.moveTo(diagnalW + arr[0] * angle, diagnalH + arr[1] * angle);
        context.lineWidth = 5 - n;
        context.lineTo(diagnalW + arr[0] * tail, diagnalH + arr[1] * tail);
        context.stroke();
      }
    }
};
let anim = function (p) {
  window.requestAnimationFrame(anim);
  draw(p);
};
anim();
