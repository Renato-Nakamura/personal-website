<template>
  <section
    class="overflow-hidden bg-gray-100 relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 h-screen h-100 d-flex flex-column justify-space-around"
  >
    <div
      data-aos="slide-down"
      data-aos-offset="200"
      class=" lg:block shadow-xl absolute left-1/2 top-0 w-4 h-28 bg-gray-400 dark:bg-gray-300"
    />
    <!-- <div
      ref="textReveal"
      class=" lg:block shadow-xl absolute left-1/2 top-24 w-1/4 h-4 bg-gray-400 dark:bg-gray-300"
    /> -->
    <div
      ref="textReveal2"
      class=" lg:block shadow-xl absolute right-1/2 top-24 w-[45%] h-4 bg-gray-400 dark:bg-gray-300"
    />
    <div
      data-aos="slide-down"
      data-aos-offset="600"
      class=" lg:block shadow-xl absolute left-[5%] top-24 w-4 h-full bg-gray-400 dark:bg-gray-300"
    />
    <div
      data-aos="fade-right"
      data-aos-offset="600"
      class=" lg:block shadow-xl absolute left-[5%] top-1/3 w-1/12 h-4 bg-gray-400 dark:bg-gray-300"
    />
  </section>
</template>

<script setup>
let textReveal;
let textReveal2;
let once = false;
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (once) {
          if (entry.isIntersecting) entry.target.classList.add("slide");
        } else entry.target.classList.toggle("slide", entry.isIntersecting);
      });
    },
    {
      threshold: 1,
    }
  );
  // observer.observe(textReveal);
  observer.observe(textReveal2);
});
</script>
