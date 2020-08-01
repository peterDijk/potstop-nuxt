<template>
  <div class="w-screen h-screen bg-white">
    <img :src="header_data['header-image'].url" class=" object-cover w-full absolute" />
    <div
      class="container mx-auto h-full relative flex items-center justify-center"
    >
      <div class="flex-col text-white text-4xl p-6">
        <h1 class="">
          {{ header_data['header-title'][0].text }}
        </h1>
        <h1 class="NuxtLogo text-7xl tracking-widest text-center">
          potstop
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['header_data']
  // async asyncData ({ $prismic, error }) {
  //   try {
  //     const header = (await $prismic.api.getSingle('header')).data
  //     console.log({ header })
  //     return {
  //       header_data: header
  //     }
  //   } catch (e) {
  //     error({ statusCode: 404, message: 'Page not found' })
  //   }
  // }
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  /* display: block; */

  /* font-weight: 300;

  font-size: 100px; */

  color: #fff;

  /* letter-spacing: 1px; */

}

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
