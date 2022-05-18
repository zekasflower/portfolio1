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
  <nav class="site-nav">
    <div class="container">
      <div class="logo">
        <router-link class="home-link" to="/">A</router-link>
      </div>

      <div class="nav-links">
        <ul>
          <li><router-link to="/about" class="nav-link">About Me</router-link></li>
          <li><router-link to="/work" class="nav-link">Work</router-link></li>
          <li><router-link to="/reviews" class="nav-link">Reviews</router-link></li>
          <li><button class="nav-link font-light" @click="copyEmail">Hire me</button></li>
        </ul>
      </div>
    </div>
  </nav>

  <transition name="fade">
    <BaseCopiedModal :copiedData="'Email'" v-if="emailCopied" />
  </transition>
</template>

<style lang="postcss" scoped>
.site-nav .container {
  @apply flex items-center justify-between pt-3.5 2xl:pt-5 pb-5 2xl:pb-8;

  .logo {
    @apply font-['Babylonica'] text-6xl xl:text-7xl 2xl:text-8xl leading-none;
  }

  .nav-links {
    ul {
      @apply flex items-center gap-x-5 2xl:gap-x-7;
      li {
        .nav-link {
          @apply text-lg 2xl:text-xl uppercase inline-block py-1.5 2xl:py-2 transition-all border-b-2 border-transparent;
          &.router-link-active {@apply border-dark}
        }
      &:last-of-type {
        .nav-link {
          @apply bg-gold px-7 text-dark;
          &:hover, &.router-link-active { @apply bg-dark text-gold }
        }
      }
      }
    }
  }
}
</style>