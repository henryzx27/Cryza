const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let trail = [];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
resize();

window.addEventListener("resize", resize);

document.addEventListener("mousemove", (e) => {
  trail.push({ x: e.clientX, y: e.clientY });
  if (trail.length > 20) trail.shift();
});

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < trail.length; i++) {
    const t = trail[i];
    ctx.beginPath();
    ctx.arc(t.x, t.y, (i + 1) * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 255, ${i / trail.length})`;
    ctx.fill();
  }
  requestAnimationFrame(draw);
}
draw();
