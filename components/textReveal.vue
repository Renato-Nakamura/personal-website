<template>
  <div class="relative inline-block reveal">
    <ClientOnly>
      <p id="text" class="opacity-0 " style="animation-delay: {delay}ms">
        <slot/>
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

<script>
let text = ref("aaaaa");
let delay = ref(200);
  
let textReveal; 

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
