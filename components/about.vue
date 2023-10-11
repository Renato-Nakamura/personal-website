<template>
  <section
    id="about"
    class="overflow-hidden snap-center relative bg-gray-50 bg-gradient-to-b dark:from-slate-800 dark:to-slate-700"
  >
    <div
      data-aos="slide-right"
      data-aos-offset="100"
      data-aos-duration="700"
      class="absolute background left-0 w-1/3 lg:w-1/4 h-full moving-gradient-2"
    />

    <section class="main mb-40 mt-40 lg:mt-64">
      <div
        class="flex flex-col items-center gap-32 lg:gap-20 lg:flex-row justify-center"
      >
        <div
          class="flex-1 max-w-prose relative bg-white dark:!bg-slate-900 px-6 py-6 lg:py-10 lg:px-10 shadow-2xl"
        >
          <div
            class="absolute left-0 -top-20 lg:-top-32 lg:text-right tracking-wide text-5xl md:text-6xl lg:text-7xl font-black text-slate-700 dark:text-gray-200"
          >
            <TextReveal> SOBRE </TextReveal>
          </div>

          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            class="text-gray-600 dark:text-gray-300 lg:text-lg space-y-5"
          >
            <p >
              Olá! Como vai? Me chamo Renato e sou um desenvolvedor com stack
              principal em JavaScript com Vue.js e Nuxt, node.js e java.
            </p>
            <p>
              Adoro programação e ensino, esses foram os grande
              pilares que moldaram a minha educação e carreira. Compartilhar o
              conhecimento é algo que me cativa e seria um prazer compartilhar o
              que já vivi e experienciei com você, espero que possamos nos
              conhecer e trocar esse contato!
            </p>
            <p>
              Além de programar de dar aulas, busco aprender coisas novas sempre, pode ser que apareça algo de diferente aqui no site, fique acompanhando!
            </p>
          </div>
        </div>
      </div>
    </section>

    <div
      data-aos="slide-up"
      data-aos-offset="200"
      class="shadow-xl hidden lg:block absolute right-14 bottom-0 w-4 h-28 bg-slate-300 dark:bg-slate-300"
    />
  </section>
</template>

<style>
.moving-gradient-2 {
  --gradient-2: linear-gradient(
    45deg,
    #f87171,
    #a78bfa,
    #f87171,
    #a78bfa,
    #f87171
  );
  background-image: var(--gradient-2);
  background-size: 400% 400%;
  background-position: top;
  animation: gradient-animation-y 7s infinite ease-in-out;
}</style>