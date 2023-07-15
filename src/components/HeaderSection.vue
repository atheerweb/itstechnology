<script setup>
import SearchBar from './SearchBar.vue'
import { Logo } from '../assets/images/index'
</script>

<template>
  <div class="flex items-center justify-between">
    <img :src="Logo" alt="logo" title="logo" class="w-40" />
    <search-bar />
    <button class="bg-sky-600 p-2 px-4 font-bold text-white rounded-full">تسجيل الدخول</button>
  </div>
</template>

<style></style>
