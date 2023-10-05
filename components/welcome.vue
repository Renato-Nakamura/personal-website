//https://bowpixel.itch.io/cat-50-animations

<template>
  <div class="h-screen h-100 d-flex flex-column justify-space-around">
    <span>Renato Nakamura</span>
    <canvas
      ref="canvas"
      class="h-screen h-100"
      style="
        position: absolute;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
      "
      @mousemove="followMouse"
    ></canvas>
  </div>
</template>
//https://codepen.io/ecemgo/details/KKbvGvg
//https://codepen.io/MiMiWilson/details/MWzOWdp
//https://codepen.io/ahmedriad1/details/BaamKgv
<script setup>
// const refs = use
import catStandRight from "../assets/images/catStandingRight.png";
import catWalkingRight from "../assets/images/catWalkingRight.png";
import catStandLeft from "../assets/images/catStandingLeft.png";
import catWalkingLeft from "../assets/images/catWalkingLeft.png";
const canvas = ref(null);
const ACCELERATION = 0.2;
const GRAVITY = 0.5;
const CANVAS_SCALE = 4;
let c, cat, canvasWidth, canvasHeight;

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

  update() {
    this.draw();
    this.frameRate++;
    if (!(this.frameRate % 5)) this.frames++;
    if (this.frames > 7) this.frames = 0;

    this.position.y += this.velocity.y;
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
    // console.log(this.focus.x, this.position.x);

    if (this.position.y + this.height + this.velocity.y <= canvasHeight) {
      this.velocity.y += GRAVITY;
    } else {
      this.velocity.y = 0;
    }
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
  console.log("myheader mounted", canvas);
  c = canvas.value.getContext("2d");
  canvas.value.width = innerWidth / CANVAS_SCALE;
  canvas.value.height = innerHeight / CANVAS_SCALE;

  addEventListener("resize", () => {
    console.log(canvas);
    canvas.value.width = innerWidth / CANVAS_SCALE;
    canvas.value.height = innerHeight / CANVAS_SCALE;
  });
  canvasWidth = canvas.value.width;
  canvasHeight = canvas.value.height;
  cat = new Cat();
  animate();
});

function animate() {
  setTimeout(() => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.value.width, canvas.value.height);
    cat.update();
  }, 20);
}

function followMouse(e) {
  // setTimeout(()=> cat.position.x = e.clientX, 300)
  cat.focus.x = e.clientX / CANVAS_SCALE;
  cat.focus.y = e.clientY / CANVAS_SCALE;
  cat.difference = e.clientX / CANVAS_SCALE - cat.position.x;
  //   if (e.clientX > cat.position.x) {
  //     cat.velocity.x += 1;
  //   } else if (e.clientX < cat.position.x) {
  //     cat.velocity.x -= 1;
  //   } else {
  //     cat.velocity = 0;
  //   }
  // cat.position.y = e.clientY
}
</script>
