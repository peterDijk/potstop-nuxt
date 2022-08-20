<template>
  <div id="header-text">
    <div class="pt-48" />
    <div class="p-4 pt-2">
      <div class="">
        <img 
          :src="headerData['logo_image'].url"
          class="pl-6 p-3 inline"
        />
        <h1
          class="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest text-white pl-6 p-3 inline"
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
