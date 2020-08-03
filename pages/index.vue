<template>
  <ContainerBgImage :headerData="headerData">
    <Header :headerData="headerData" />
    <Content :homepageData="homepageData" />
  </ContainerBgImage>
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

