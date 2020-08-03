<template>
  <div class="w-screen h-screen bg-white overflow-hidden absolute">
    <img
      :src="headerData['header-image'].url"
      class="object-cover h-full w-full absolute"
    />
    <div
      class="container mx-auto h-full relative flex-row justify-center overflow-scroll"
    >
      <Header :header_data="headerData" />
      <Content :homepage_data="homepageData" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const header = (await $prismic.api.getSingle('header')).data
      const homepage = (await $prismic.api.getSingle('homepage')).data

      return {
        headerData: header,
        homepageData: homepage,
      }
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
