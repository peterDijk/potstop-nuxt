<template>
  <div id="header-text">
    <no-ssr placeholder="loading...">
      <!-- <Slide> -->
      <a id="home" href="#">
        <span>Home</span>
      </a>
      <!-- </Slide> -->
    </no-ssr>
    <div class="pt-24" />
    <div class="pl-6 pr-6 pt-4">
      <div class="flex-row">
        <h1
          class="NuxtLogo tracking-widest pl-1 sm:pl-5 md:pl-16 lg:pl-32 xl:pl-32 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-green-600 text-left"
        >
          {{ headerData['header-main-title'][0].text }}
        </h1>
        <h1
          class="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-white pl-6 p-3 text-right w-full"
        >
          {{headerData['title'][0].text }}
        </h1>
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
