<script setup>
import {
  BannerSection,
  HeaderSection,
  NavBar,
  SliderSection,
  FeaturesSection,
  StatisticsSection,
  CategoriesSection
} from './components'
</script>

<template>
  <div class="font-body">
    <banner-section />
    <div class="px-40">
      <header-section />
      <nav-bar />
      <slider-section />
      <features-section />
    </div>
    <statistics-section />
    <div class="px-40">
      <categories-section />
    </div>
  </div>
</template>
