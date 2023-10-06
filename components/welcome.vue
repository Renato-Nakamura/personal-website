//https://bowpixel.itch.io/cat-50-animations

<template>
  <div class="h-screen h-100 d-flex flex-column justify-space-around">
    <section
      id="home"
      class="relative main bg-gray-100 h-screen flex bg-gradient-to-b dark:from-gray-700 dark:to-gray-900"
    >
      <div
        data-aos="slide-down"
        data-aos-delay="700"
        data-aos-duration="700"
        class="absolute top-0 right-0 h-1/2 w-full md:w-1/3 md:h-full moving-gradient-1"
      />

      <section
        data-aos="fade-in"
        data-aos-delay="600"
        class="m-auto pt-5 relative grow max-w-5xl"
      >
        <div
          class="bg-white dark:bg-gray-900 px-5 py-10 lg:py-14 lg:px-10 shadow-2xl"
        >
          <div
            data-aos="flip-up"
            data-aos-delay="600"
            data-aos-duration="700"
            class="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-6"
          />
          <h1
            class="mb-3 md:mb-6 font-mono font-black text-2xl md:text-3xl lg:text-5xl text-gray-700 dark:text-white"
          >
            <TextReveal delay="{800}" once text="{welcomeMessage}" />
          </h1>
          <p
            class="text-lg md:text-xl lg:text-xl mb-8 font-bold text-gray-500 dark:text-gray-400 ml-1"
          >
            <TextReveal delay="{1000}" once text="Renato" />
          </p>

          <div
            data-aos="flip-up"
            data-aos-delay="1200"
            data-aos-duration="700"
            class="text-sm text-gray-700 font-semibold font-mono"
          >
            <a
              href="#contact"
              class="transition-colors px-4 py-1 inline-block bg-blue-200 shadow-blue-300/20 shadow-lg hover:bg-blue-300 rounded-sm border border-blue-400"
              >Let's talk</a
            >
          </div>
        </div>
      </section>
    </section>
    <canvas
      ref="canvas"
      class="h-full w-100"
      style="
        z-index: 10;
        position: absolute;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
      "
      @click="followMouse"
    ></canvas>
  </div>
</template>
//https://codepen.io/ecemgo/details/KKbvGvg
//https://codepen.io/MiMiWilson/details/MWzOWdp
//https://codepen.io/ahmedriad1/details/BaamKgv
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

  addEventListener("resize",()=> setCanvasSize(true));
  addEventListener("orientationchange",()=> setCanvasSize());
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
  cat.focus.x = e.clientX / CANVAS_SCALE;
  cat.focus.y = e.clientY / CANVAS_SCALE;
  cat.difference = e.clientX / CANVAS_SCALE - cat.position.x;
}
</script>
