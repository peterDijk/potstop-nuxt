<template>
  <div class="relative">
    <div class="w-screen h-screen bg-white overflow-hidden absolute">
      <img
        :src="header_data['header-image'].url"
        class="object-cover h-full w-full absolute"
      />
      <div
        class="container mx-auto h-full relative flex-row justify-center overflow-scroll"
      >
        <div id="header-text" class="p-6 pt-64">
          <div class="">
            <h1
              class="NuxtLogo tracking-widest pl-1 sm:pl-5 md:pl-16 lg:pl-32 xl:pl-32 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-green-600"
            >
              potstop
            </h1>
            <h1
              class="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest text-white pl-6 p-3 inline"
            >
              {{ header_data['header-title'][0].text }}
            </h1>
          </div>
        </div>
        <div class="text-blue-900 bg-white mt-56">
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
          <p class="text-base mt-8 mb-4 p-4">
            Content
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['header_data'],
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
};
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
