<script setup>
import { onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

import SiteNav from '@/components/SiteNav.vue'

const route = useRoute()

const isMobileView = ref(false)

onMounted(() => {
  window.innerWidth < 1024 ? isMobileView.value = true : isMobileView.value = false
  window.addEventListener('resize', () => {
    window.innerWidth < 1024 ? isMobileView.value = true : isMobileView.value = false
  })
})
</script>

<template>
  <div v-if="isMobileView" class="mobile-view">
    <h2>Screens lower than 1024px is not ready yet! Sorry.</h2>
  </div>
  <div v-else>
    <SiteNav v-if="route.path !== '/'" />

    <RouterView />
  </div>
</template>

<style lang="postcss" scoped>
.mobile-view {
  @apply h-screen flex items-center justify-center;
  h2 { @apply text-2xl md:text-4xl text-center }
}
</style>