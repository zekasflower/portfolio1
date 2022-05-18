<script setup>
import { ref } from 'vue'

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import kostasImage from '@/assets/images/kostas.jpg'
import shuImage from '@/assets/images/shu.jpg'
import mohamedImage from '@/assets/images/mohamed.png'
import larryImage from '@/assets/images/larry.jpg'
import arminasImage from '@/assets/images/arminas.jpg'
import sarahImage from '@/assets/images/sarah.jpg'
import tyImage from '@/assets/images/ty.jpg'
import chrisImage from '@/assets/images/chris.jpg'

const testimonials = ref([
  {
    content: 'Abdullah is a master of his craft and delivers consistently high quality work quickly. He asks all the right questions and gets it right the first time. We’re very pleased with his deliverables and highly recommend him to anyone who wants to hit the ground running and get pixel-perfect execution.',
    client: 'Kostas Nasis',
    image: kostasImage
  },
  {
    content: 'To be honest you are one of the best developer I have worked with, besides getting things done quickly, you truly care about your work and pay attention to details. A lot of times you raise good questions and catch mistakes I make. I really appreciate that.',
    client: 'Shu Li',
    image: shuImage
  },
  {
    content: 'Very happy to deal with him, he was fast and helpful. The work was done on time.',
    client: 'Mohamed E.',
    image: mohamedImage
  },
  {
    content: 'All that I can say is wow! He really impressed me with the quality of work! Working with him immediately!',
    client: 'Larry Jordan',
    image: larryImage
  },
  {
    content: 'Abdalla did his assignment really well and with passion. Recommend to anyone looking for a professional',
    client: 'Arminas Z.',
    image: arminasImage
  },
  {
    content: 'Abdalla was very thorough and fast, I would hire Abdalla again.',
    client: 'Sarah Kay',
    image: sarahImage
  },
  {
    content: 'Abd has great skills and perfect communication. Will work with him again.',
    client: 'Ty P.',
    image: tyImage
  },
  {
    content: 'Abdullah was very quick and has a great knowledge of vue. Highly recommended !',
    client: 'Christian',
    image: chrisImage
  },
])
</script>

<template>
  <section class="client-reviews">
    <div class="sites-rate">
      <div class="container">
        <div class="upwork box">
          <a href="https://www.upwork.com/freelancers/~019eeed100027d6b0f" target="_blank">
            <img src="@/assets/images/upwork.png" alt="">
          </a>
          <div class="content">
            <h2>5<span>/5</span></h2>
            <ul>
              <li v-for="i in 5" :key="i">
                <Icon class="star-icon" icon="emojione:glowing-star" />
              </li>
            </ul>
          </div>
        </div>
        <div class="freelancer box">
          <a href="https://www.freelancer.com/u/zekasflower" target="_blank">
            <img src="@/assets/images/freelancer.svg" alt="">
          </a>
          <div class="content">
            <h2>5<span>/5</span></h2>
            <ul>
              <li v-for="i in 5" :key="i">
                <Icon class="star-icon" icon="emojione:glowing-star" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="testimonials">
        <!-- navigation.nextEl=".swiper-button-next"  navigation.prevEl=".swiper-button-prev"    -->
        <swiper 
        :modules="[Navigation]"
        navigation
        class="testimonials-slides">
          <swiper-slide
            class="testimonial-slide" v-for="testimonial, index in testimonials" :key="index">
            <blockquote>
              <Icon icon="bxs:quote-alt-left"  class="icon"/>
              <div class="content">
                <p v-html="testimonial.content"></p>
              </div>
              <footer>
                <img :src="testimonial.image" alt="">
                <h3 v-html=" '—' +  testimonial.client"></h3>
              </footer>
            </blockquote>
          </swiper-slide>
        </swiper>
        <img src="@/assets/images/reviews.svg" alt="" class="back-img">
      </div>
    </div>


<!-- spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto', -->
  </section>
</template>

<style>
@import url('./index.pcss');
</style>