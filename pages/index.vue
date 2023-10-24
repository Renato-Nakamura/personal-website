<template>
  <VLayout :class="{ 'dark': true }">
    <ClientOnly>
      <Header />
    </ClientOnly>
    <main class="d-flex flex-column w-100">
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  </VLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: "pt-br" },
  link: [{
    rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  }
  ]
});

let darkMode = ref(false);

onBeforeMount(() => {
  darkMode = localStorage.getItem("color-theme") == "dark"
  // localStorage.setItem("color-theme", "dark");
});
</script>
