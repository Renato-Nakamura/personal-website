//https://bowpixel.itch.io/cat-50-animations
<template>
  <canvas
    ref="canvas"
    style="
      z-index: 10;
      position: absolute;
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-crisp-edges;
      image-rendering: pixelated;
    "
    @click="followMouse"
  ></canvas>
</template>

<script setup>
import catStandRight from "../assets/images/catStandingRight.png";
import catWalkingRight from "../assets/images/catWalkingRight.png";
import catStandLeft from "../assets/images/catStandingLeft.png";
import catWalkingLeft from "../assets/images/catWalkingLeft.png";
const canvas = ref(null);
const ACCELERATION = 0.2;
const GRAVITY = 0.5;
const CANVAS_SCALE = 4;
let c, cat;

class Cat {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.focus = {
      x: 0,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };

    this.difference = 0;
    this.width = 32;
    this.height = 40;
    this.frames = 0;
    this.frameRate = 0;
    this.image = {
      standRight: createImage(catStandRight),
      walkingRight: createImage(catWalkingRight),
      standLeft: createImage(catStandLeft),
      walkingLeft: createImage(catWalkingLeft),
    };
    this.animation = "standRight";
  }

  draw() {
    c.drawImage(
      this.image[this.animation],
      128 * this.frames,
      0,
      128,
      1024,
      this.position.x,
      this.position.y,
      32,
      320
    );
  }

  setFrame() {
    this.frameRate++;
    if (!(this.frameRate % 5)) this.frames++;
    if (this.frames > 7) this.frames = 0;
  }

  moveCat() {
    this.position.x += this.velocity.x;

    if (this.focus.x > this.position.x + 40) {
      cat.animation = "walkingRight";
      if (this.focus.x - this.position.x > this.difference / 2) {
        this.velocity.x += ACCELERATION;
      } else {
        this.velocity.x -= ACCELERATION;
      }
    } else if (this.focus.x < this.position.x - 10) {
      cat.animation = "walkingLeft";

      if (this.focus.x - this.position.x > this.difference / 2) {
        this.velocity.x += ACCELERATION;
      } else {
        this.velocity.x -= ACCELERATION;
      }
    } else {
      if (cat.animation == "walkingRight" || cat.animation == "standRight") {
        cat.animation = "standRight";
      } else {
        cat.animation = "standLeft";
      }

      this.velocity.x = 0;
    }
  }

  gravityOnCat() {
    this.position.y += this.velocity.y;

    if (
      this.position.y + this.height + this.velocity.y <=
      canvas.value.height
    ) {
      this.velocity.y += GRAVITY;
    } else {
      this.velocity.y = 0;
    }
  }

  update() {
    if (canvas.value == null) return;
    this.draw();
    this.setFrame();
    this.moveCat();
    this.gravityOnCat();
  }
}

function createImage(catImage) {
  const imagem = new Image();
  imagem.src = catImage;
  imagem.onload = () => {
    c.imageSmoothingEnabled = false;
  };
  return imagem;
}

onMounted(() => {
  initCat();
});

function initCat() {
  c = canvas.value.getContext("2d");
  setCanvasSize();

  addEventListener("resize", () => setCanvasSize(true));
  addEventListener("orientationchange", () => setCanvasSize());
  cat = new Cat();
  animate();
}

function setCanvasSize(onlyWidth) {
  canvas.value.width = innerWidth / CANVAS_SCALE;
  if (!onlyWidth) canvas.value.height = innerHeight / CANVAS_SCALE;
}

function animate() {
  setTimeout(() => {
    requestAnimationFrame(animate);
    if (canvas.value == null) return;
    c.clearRect(0, 0, canvas.value.width, canvas.value.height);
    cat.update();
  }, 20);
}

function followMouse(e) {
  if (e.clientY < innerHeight / 2) cat.velocity.y = -5;
  cat.focus.x = e.clientX / CANVAS_SCALE;
  cat.focus.y = e.clientY / CANVAS_SCALE;
  cat.difference = e.clientX / CANVAS_SCALE - cat.position.x;
}
</script>
