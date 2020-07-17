<template>
  <div class="bg-gray-500">
    <h1>{{ header_data['header-title'][0].text }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: ['header_data'],
};
</script>
