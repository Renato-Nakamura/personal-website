<template>
  <div class="h-screen h-100 d-flex flex-column justify-space-around">
    <section
      id="home"
      class="relative main bg-gray-100 h-screen flex bg-gradient-to-b dark:from-slate-700 dark:to-slate-900"
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
        class=" pt-5 relative grow max-w-4xl mx-3 my-auto md:!m-auto"
      >
        <div
          class="bg-white dark:!bg-gray-900 px-5 py-10 lg:py-14 lg:px-10 shadow-2xl"
        >
          <div class="flex justify-between flex-col-reverse md:flex-row">
            <div class="my-auto">
              <h1
                data-aos-delay="800"
                class="mb-3 md:mb-6 font-black text-2xl md:text-3xl lg:text-5xl text-gray-700 dark:text-white text-center md:!text-left"
                style="font-family: 'EB Garamond'"
              >
                Olá, sou o Renato!
              </h1>
              <p
                class="text-lg md:text-xl lg:text-xl mb-8 font-bold text-gray-500 dark:text-gray-400 ml-1"
                data-aos-delay="1000"
              >
                Full Stack Developer | JavaScript | TypeScript
              </p>
            </div>
            <div class=" flex flex-col items-center">
              <img
              data-aos="fade-in"
                data-aos-delay="1000"
                data-aos-duration="700"
                src="../assets/images/profile.jpg"
                alt="image of Renato Nakamura"
                class="rounded-full w-60 h-60 mb-2"
              />
              <div
                data-aos="flip-up"
                data-aos-delay="1200"
                data-aos-duration="700"
                class="text-sm hidden text-gray-700 font-semibold dark:text-gray-400 md:block"
                style="font-family: EB-Garamond"
              >
                <span> - Renato Nakamura</span>
              </div>
            </div>
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

<style>
.moving-gradient-1 {
  --gradient-1: linear-gradient(
    45deg,
    #818cf8,
    #60a5fa,
    #6ee7b7,
    #60a5fa,
    #818cf8
  );
  background-image: var(--gradient-1);
  background-size: 400% 400%;
  background-position: top;
  animation: gradient-animation-y 7s infinite ease-in-out;
}
</style>
