<template>
  <div>
    <Seo :seoData="seoData" />
    <ContainerBgImage :headerData="headerData">
      <Header :headerData="headerData" />
      <Gallery :data="galleryData" />
    </ContainerBgImage>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const header = (await $prismic.api.getSingle('header')).data
      const seo = (await $prismic.api.getSingle('seo')).data
      const gallery = (await $prismic.api.getSingle('gallery')).data;

      console.log({ body: gallery.body })

      return {
        headerData: header,
        seoData: seo,
        galleryData: gallery,
      }
    } catch (e) {
      console.log({ e })
      return error({ statusCode: 404, message: 'Pageee not found' })
    }
  },
}
</script>
