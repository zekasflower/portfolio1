<script setup>
import { ref } from 'vue';
import copy from 'copy-text-to-clipboard';

const emailCopied = ref(false)

const copyEmail = () => {
  copy('me@abdullahdiv.com')
  emailCopied.value = true
  setTimeout(() => {
    emailCopied.value = false
  }, 1000);
}
</script>

<template>
  <main class="homepage">
    <div class="hero-section">
      <img class="back-img" src="@/assets/images/me4.jpg" alt="Image for Abdullah">

      <div class="info-content">
        <h1>Abdullah</h1>
        <h2>Vue | Tailwind</h2>
        <h4>Front-end developer</h4>
      </div>

      <nav class="hero-links">
        <ul>
          <li><router-link to="/about" class="link">About</router-link></li>
          <li><router-link to="/work" class="link">Work</router-link></li>
          <li><router-link to="/reviews" class="link">Reviews</router-link></li>
          <li><button class="link font-light" @click="copyEmail">Hire me</button></li>
        </ul>
      </nav>
    </div>
  </main>

  <transition name="fade">
    <BaseCopiedModal class="!bg-dark" :copiedData="'Email'" v-if="emailCopied" />
  </transition>
</template>

<style scoped>
@import url('./index.pcss');
</style>