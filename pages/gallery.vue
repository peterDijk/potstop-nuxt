<template>
  <div>
    <Seo :seoData="seoData" />
    <ContainerBgImage :headerData="headerData">
      <Header :headerData="{...headerData, title: aboutData.title}" />
      <Gallery :galleryData="galleryData" />
    </ContainerBgImage>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const header = (await $prismic.api.getSingle('header')).data
      const about = (await $prismic.api.getSingle('about')).data
      const seo = (await $prismic.api.getSingle('seo')).data
      const gallery = (await $prismic.api.getSingle('gallery-items')).data

      return {
        headerData: header,
        aboutData: about,
        seoData: seo,
        galleryData: gallery,
      }
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

