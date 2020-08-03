<template>
  <div class="text-blue-900 bg-white mt-56">
    <p class="text-base mt-8 mb-4 p-4">
      <prismic-rich-text :field="homepage_data['main-text']" />
    </p>
  </div>
</template>;

<script lang="ts">
export default {
  props: ['homepage_data']
}
</script>
