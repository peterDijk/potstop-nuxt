<template>
  <div class="w-screen h-screen bg-green-100">
    <img :src="header_data['header-image'].url" class=" object-cover h-full absolute" />
    <div
      class="container mx-auto h-full relative flex items-center justify-center"
    >
      <div class="text-green-100 z-auto m-auto p-6 sm:h-12 md:h-16 lg:h-20 xl:h-24 ">
        <h1 class="">{{ header_data['header-title'][0].text }}</h1>
        <h1 class="NuxtLogo title">
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
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
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
