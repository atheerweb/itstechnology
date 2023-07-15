<script setup>
import SearchBar from './SearchBar.vue'
import { Logo } from '../assets/images/index'
</script>

<template>
  <div class="flex items-center justify-between">
    <img :src="Logo" alt="logo" title="logo" class="w-40" />
    <search-bar />
    <div class="relative bottom-2">
      <span
        class=" relative top-2 text-white rounded-full bg-red-500 p-1 w-6 h-6 flex justify-center items-center"
        >1</span
      >
      <div class="rounded-full w-11 h-11 flex items-center justify-center bg-slate-200">
        <font-awesome-icon icon="bag-shopping" class="w-6 h-6" />
      </div>
    </div>
    <button class="bg-sky-600 p-2 px-4 font-bold text-white rounded-full">تسجيل الدخول</button>
  </div>
</template>

<style></style>
