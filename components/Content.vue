<template>
  <div class="bg-white text-blue-900 mt-56 mb-4 p-6">
    <prismic-rich-text :field="homepageData['main-text']" wrapper="div" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    homepageData: {
      type: Object,
      required: true
    }
  }
}
</script>

