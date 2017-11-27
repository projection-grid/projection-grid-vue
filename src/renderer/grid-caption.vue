<template>
  <caption v-bind="attributes">
    <grid-content v-bind="content" />
  </caption>
</template>
<script>
import GridContent from './grid-content.vue';

export default {
  props: ['attributes', 'content'],
  components: { GridContent },
};
</script>
