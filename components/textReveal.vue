<template>
  <div ref="textReveal" class="relative inline-block">
    <ClientOnly>
      <p id="text" class="opacity-0" style="animation-delay: {delay}ms">
        <slot />
      </p>
    </ClientOnly>
    <div class="absolute overflow-hidden pointer-events-none inset-0">
      <div
        id="cover"
        class="absolute inset-0 bg-current transform-gpu -translate-x-[101%]"
        style="animation-delay: {delay}ms"
      />
    </div>
  </div>
</template>

<script setup>
let delay = ref(200);

let textReveal;
let once = false;
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      console.log(entry, i);
      if (once) {
        if (entry.isIntersecting) entry.target.classList.add("reveal");
      } else entry.target.classList.toggle("reveal", entry.isIntersecting);
    });
  });
  observer.observe(textReveal);
});
</script>

<style>
@keyframes cover-reveal {
  0% {
    transform: translateX(-101%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(101%);
  }
}
@keyframes text-reveal {
  50% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.reveal #cover {
  animation: cover-reveal 700ms ease 100ms forwards;
}

.reveal #text {
  animation: text-reveal 700ms ease 100ms forwards;
}
</style>
