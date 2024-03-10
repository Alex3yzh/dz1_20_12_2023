const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let startX, startY;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    const color = document.getElementById("color").value;
    const transparency = document.getElementById("transparency").value;
    ctx.fillStyle = `${color}${Math.floor(transparency * 255).toString(16)}`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(startX, startY, e.offsetX - startX, e.offsetY - startY);
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

document.getElementById("clearBtn").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
