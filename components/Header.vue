<template>
  <div class="relative">
    <div class="w-screen h-screen bg-white overflow-hidden absolute">
      <img
        :src="header_data['header-image'].url"
        class="object-cover h-full w-full absolute"
      />
      <div
        class="container mx-auto h-full relative flex items-center justify-center overflow-scroll"
      >
        <div class="pt-56 p-6 ">
          <div class="bg-green-600">
            <h1 class="NuxtLogo tracking-widest text-center text-white sm:text-4xl md:text-8xl lg:text-9xl xl:text-9xl">
              potstop
            </h1>
          </div>
          <h1 class="text-4xl text-green-300">
            {{ header_data['header-title'][0].text }}
          </h1>
        </div>
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
