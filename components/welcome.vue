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
    <Cat class="h-full w-100" />
  </div>
</template>
//https://codepen.io/ecemgo/details/KKbvGvg
//https://codepen.io/MiMiWilson/details/MWzOWdp
//https://codepen.io/ahmedriad1/details/BaamKgv
