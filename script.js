let canvas = document.querySelector("#canvas-animation");
const context = canvas.getContext("2d");
const image = document.querySelector("#source");

const player = {
  x: 20,
  y: 200,
  w: 60,
  h: 50,
  speed: 4,
  dx: 0,
  dy: 0,
  angle: 0,
  newPos: function () {
    this.x += this.dx;
    this.y += this.dy;
    this.detectBorder();
    if (this.dx > 0 && this.dy == 0) {
      this.angle = 0;
    } else if (this.dx < 0 && this.dy == 0) {
      this.angle = 180;
    } else if (this.dy < 0 && this.dx == 0) {
      this.angle = 270;
    } else if (this.dy > 0 && this.dx == 0) {
      this.angle = 90;
    } else {
    }
    drawRotate(this.angle);
  },
  moveRight: function () {
    player.dx = player.speed;
  },
  moveLeft: function () {
    player.dx = -player.speed;
  },

  moveUp: function () {
    player.dy = -player.speed;
  },
  moveDown: function () {
    player.dy = player.speed;
  },
  detectBorder: function () {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }

    if (this.x + this.w > canvas.width) {
      this.x = canvas.width - this.w;
    }

    if (this.y + this.h > canvas.height) {
      this.y = canvas.height - this.h;
    }
  },
};

function drawRotate(deg = 0) {
  // Очищаємо канву
  clear();
  // Зберігаємо попередній контекст
  context.save();

  //Переміщаємо координатну сітку в центр корабля
  context.translate(player.x + player.w / 2, player.y + player.h / 2);

  //Rotating
  context.rotate((deg * Math.PI) / 180);

  // Повертаємо координатну сітку в початкове положення
  context.translate(-player.w / 2, -player.h / 2);

  // Image show
  context.drawImage(image, 0, 0, player.w, player.h);

  //Відновлюємо координати і всі налаштування контексту
  context.restore();
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// Точка входу анімації
function update() {
  // Очищаємо канву
  clear();
  //drawPlayer();

  // Оновлюємо позицію корабля
  player.newPos();
  // Формуємо наступний фрейм
  requestAnimationFrame(update);
}
// Формуємо наступний фрейм
requestAnimationFrame(update);

// EVENT LIsTENERs

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    player.moveRight();
  } else if (e.key === "ArrowLeft") {
    player.moveLeft();
  } else if (e.key === "ArrowUp") {
    player.moveUp();
  } else if (e.key === "ArrowDown") {
    player.moveDown();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    player.dx = 0;
  }

  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    player.dy = 0;
  }
});

// -------------------------------------------------------------------

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = 5;
  }

  move() {
    this.x += this.speed;
  }

  draw(context) {
    context.fillStyle = "white";
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}

let bullets = [];

function handleSpacebarPress() {
  let bullet = new Bullet(player.x + player.w, player.y + player.h / 2);
  bullets.push(bullet);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    handleSpacebarPress();
  }
});

function animateBullets() {
  bullets.forEach((bullet, index) => {
    bullet.move();
    if (bullet.x > canvas.width) {
      bullets.splice(index, 1);
    }
  });
}

function drawBullets() {
  bullets.forEach((bullet) => {
    bullet.draw(context);
  });
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawRotate(player.angle);
  animateBullets();
  drawBullets();
  requestAnimationFrame(animate);
}

animate();
