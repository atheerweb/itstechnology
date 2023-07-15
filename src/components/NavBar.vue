<script setup>
import { routes } from '../utils/constants'
</script>

<template>
  <ul class="flex justify-between items-center px-20">
    <li v-for="(route, routeIndex) in routes" :key="routeIndex" class="pt-5 pb-10">
      <div v-if="!routeIndex" class="border-b-sky-600 border-b-4 font-bold text-sky-600">
        {{ route }}
      </div>
      <div v-else>
        {{ route }}
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
