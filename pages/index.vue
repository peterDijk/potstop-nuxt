<template>
  <div>
    <div>
      <!-- <Logo /> -->
      <Header :header_data="header_data" />
      <!-- <TestTailwind /> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const header = (await $prismic.api.getSingle('header')).data
      console.log({ header })
      return {
        header_data: header
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style>
/* @tailwind base;

@tailwind components;

@tailwind utilities; */

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
