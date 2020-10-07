<template>
  <div>
    <Seo :seoData="seoData" />
    <ContainerBgImage :headerData="headerData">
      <Header :headerData="headerData" />
      <Content :homepageData="homepageData" />
    </ContainerBgImage>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const header = (await $prismic.api.getSingle('header')).data
      const homepage = (await $prismic.api.getSingle('homepage')).data
      const seo = (await $prismic.api.getSingle('seo')).data

      return {
        headerData: header,
        homepageData: homepage,
        seoData: seo,
      }
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

