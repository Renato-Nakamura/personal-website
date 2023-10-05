
<template>
  <VLayout>
    <ClientOnly>
      <Header/>
    </ClientOnly>
    <main class="d-flex flex-column w-100">
      <Welcome/>
      <About/>
    </main>
  </VLayout>
</template>

<script setup>
useHead({
    htmlAttrs: { lang: 'pt-br' },
})
</script>