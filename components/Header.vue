<template>
  <div>
    <!-- <div class="h-64">
      <div class="p-4 m-4 bg-green-600">
        <h1 class="text-2xl font-bold text-white">
          Tailwind CSS Demo
        </h1>
      </div>
      <div class="p-4 m-4 bg-green-300 h-full">
        <h2 class="text-green-900">
          Have much fun using Tailwind CSS
        </h2>
      </div>
      <h1 class="title">
        potstop
      </h1>
    </div> -->

    <div class="absolute w-screen h-screen flex-col">
      <img
        :src="header_data['header-image'].url"
        class="w-full mx-auto z-0"
      />
    </div>
    <div class="absolute">
      <div class="text-green-100 z-auto m-auto p-6">
        <h1>{{ header_data['header-title'][0].text }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['header_data'],
};
</script>
