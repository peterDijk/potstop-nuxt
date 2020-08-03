<template>
  <div id='header-text'>
    <div class="pt-48" />
    <div class="p-6 pt-64">
      <div class="">
        <h1
          class="NuxtLogo tracking-widest pl-1 sm:pl-5 md:pl-16 lg:pl-32 xl:pl-32 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-green-600"
        >{{ headerData['header-main-title'][0].text }}</h1>
        <h1
          class="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest text-white pl-6 p-3 inline"
        >{{ headerData['header-title'][0].text }}</h1>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
export default {
  props: {
    headerData: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
