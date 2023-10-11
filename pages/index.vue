<template>
  <VLayout :class="{'dark':true}">
    <ClientOnly>
      <Header />
    </ClientOnly>
    <main class="d-flex flex-column w-100">
      <Welcome />
      <About />
      <Experience />
      <Projects />

    </main>
  </VLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: "pt-br" },
});

let darkMode = ref(false);

onBeforeMount(() => {
  darkMode = localStorage.getItem("color-theme") == "dark"
  // localStorage.setItem("color-theme", "dark");
});
</script>
