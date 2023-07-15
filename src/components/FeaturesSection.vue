<script setup>
import { Features } from '../assets/images'
import { features } from '../utils/constants'
</script>
<template>
  <div class="flex items-center justify-between py-5">
    <img
      :src="Features"
      alt="guys beside stars"
      title="two guys beside stars inside a bubble"
      class="w-96"
    />
    <div class="text-center p-5">
      <h3 class="text-sky-600 font-bold text-xl">التميز في تقديم الخدمات</h3>
      <p class="text-sm font-medium text-gray-700 mt-5">
        لأن راحتك تهمنا و يزيدنا سرورا ان نقدم لك الخدمات المختلفة بكل مصداقية و أمان , وشعارنا هو
        كسب ثقة العملاء الكرام...
      </p>
      <div class="flex justify-between flex-wrap text-start gap-5 mt-5">
        <div
          v-for="(feature, featureIndex) in features"
          :key="featureIndex"
          :class="['flex items-center justify-between w-52', { 'w-64': featureIndex % 2 === 0 }]"
        >
          <font-awesome-icon :icon="feature.icon" class="w-8 h-8" />
          <div class="flex justify-between items-center w-40">
            <div>
              <b class="text-gray-700">{{ feature.title }}</b>
              <p class="text-gray-500">{{ feature.description }}</p>
            </div>
            <div v-if="featureIndex % 2 === 0" class="w-1 h-14 rounded bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
