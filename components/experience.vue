<template>
  <section
    id="experience"
    class="overflow-hidden bg-gray-100 relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
  >
    <div
      data-aos="slide-down"
      data-aos-delay="900"
      class="bg-gray-200 z-0 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full"
    />

    <header class="px-5 relative lg:flex pt-40 pb-24 gap-10 text-center">
      <h2
        class="basis-1/2 inline-block lg:text-right tracking-wide text-4xl md:text-5xl lg:text-7xl font-black text-gray-700 dark:text-gray-200 mb-4"
      >
        <TextReveal text="EXPERIENCE">
            EXPERIÊNCIAS
        </TextReveal>
      </h2>
      <div data-aos="fade-left" data-aos-delay="200" class="basis-1/2">
        <p
          class="text-base lg:text-lg text-gray-600 dark:text-gray-300 lg:text-left lg:max-w-sm mx-auto max-w-prose lg:!mx-0 font-semibold"
        >
          Com 2 anos de experiência e crescendo!
        </p>
      </div>
    </header>

    <section class="main max-w-6xl mx-auto mb-40 relative z-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 mx-6 sm:mx-28 md:mx-0 lg:mx-20 xl:mx-28 shadow-2xl"
      >
        <button
        v-for="experience of experiences"

          class="exp text-left aspect-square flex"
          :class="experience.background"
        >
          <img
            loading="lazy"
            class="m-auto h-40 sm:h-52 md:h-48 lg:h-40 aspect-square object-scale-down"
            :src="experience.logo"
            alt="logo for "
            style="mix-blend-mode: {experience.blend}"
          />
          <div
            class="exp-desc bg-gray-100/80 dark:bg-gray-800/80 p-5 sm:p-10 md:p-5 backdrop-blur-md"
          >
            <h1
              class="font-bold text-gray-700 dark:text-white text-xl lg:text-2xl"
            >
              {{experience.position}}
            </h1>
            <h1
              class="font-bold text-lg lg:text-lg mb-1"
          :class="experience.highlight"

            >
              {{experience.name}}
            </h1>
            <p class="text-gray-500 dark:text-gray-400 mb-5 font-mono text-sm">
              <time>{{experience.start}}</time> - <time>{{experience.end}}</time>
            </p>
            <ul
              class="text-base font-semibold text-gray-700 dark:text-gray-200 list-square ml-4"
            >
              <li class="mt-1" v-for="point of experience.points">{{point}}</li>
            </ul>
          </div>
        </button>
      </div>
    </section>

    <div
      data-aos="slide-up"
      data-aos-offset="200"
      class="hidden lg:block shadow-xl absolute left-1/2 bottom-0 w-4 h-28 bg-gray-400 dark:bg-gray-300"
    />
  </section>
</template>

<script setup>
import stefaniniLogo from '../assets/images/logos/stefanini.png'
let experiences = ref([
  {
    "name": "Stefanini Inspiring",
    "logo": stefaniniLogo,
    "background": "bg-white",
    "position": "Desenvolvedor Full-Stack",
    "start": "Fev 2022",
    "end": "Present",
    "highlight": "text-red-400",
    "points": [
      "Estou trabalhando como desenvolvedor, iniciei na Inspiring no projeto da FEBRAFAR, onde fiz parte da equipe de front-end trazendo melhorias usando o Angular, Angular Material e Firebase. Atualmente estou no projeto do Inspiring Engagement Plataform (IEP) trabalhando na criação de funcionalidades e passando por tecnologias como Nuxt 2 (Vue), Tailwind, Firebase, NodeJs, GraphQl e MeiliSearch."
    ]
  }])
</script>

<style>
.exp {
  position: relative;
  --hover-time: 400ms;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* background-attachment: fixed; */
}

.exp .exp-desc {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all var(--hover-time) ease-out;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.exp:is(:hover, :focus) .exp-desc {
  transform: translateY(0);
  opacity: 1;
}

@media (min-width: 768px) {
  .exp:first-child {
    grid-column: 1 / span 2;
    aspect-ratio: 2 / 1;
  }

  .exp:first-child img {
    height: 80%;
  }
}
</style>
