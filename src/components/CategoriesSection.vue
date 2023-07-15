<script setup>
import { services } from '../utils/constants'
</script>
<template>
  <div
    class="my-14 p-10 flex justify-center items-center flex-col border-4 border-amber-300 rounded"
  >
    <h3 class="font-bold text-sky-600 text-xl text-center">الخدمات التي نقدمها</h3>
    <p class="text-xs mt-2 text-gray-400 text-center">أنقر علي الخدمة لتتمتع بعروضنا</p>
    <div class="flex flex-wrap mt-5 gap-10 justify-center items-start font-bold text-gray-600">
      <div
        v-for="(service, serviceIndex) in services"
        :key="serviceIndex"
        class="p-5 bg-gray-100 rounded-lg border border-slate-300 w-40 flex items-center justify-center"
      >
        <p>{{ service }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
