<script setup>
import NavBar from './components/NavBar.vue'
import HeaderSection from './components/HeaderSection.vue'
import BannerSection from './components/BannerSection.vue'
import SliderSection from './components/SliderSection.vue'
</script>

<template>
  <div class="font-body">
    <banner-section />
    <div class="px-40">
      <header-section />
      <nav-bar />
      <slider-section />
    </div>
  </div>
</template>
