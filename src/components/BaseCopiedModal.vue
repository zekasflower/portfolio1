<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps(['copiedData'])

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'visible'
})
</script>

<template>
  <section class="copied-modal bg-light">
    <p> {{ copiedData }} Copied!</p>
  </section>
</template>

<style lang="postcss" scoped>
.copied-modal {
  @apply fixed top-0 left-0 w-full h-full flex items-center justify-center z-50;
  p {@apply lg:text-7xl xl:text-8xl 2xl:text-9xl text-center text-gold font-normal bg-gold py-8 w-full bg-opacity-10 }
}
</style>