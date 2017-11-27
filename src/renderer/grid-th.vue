<template>
  <th v-bind="attributes">
    <grid-content v-bind="content" />
  </th>
</template>
<script>
import GridContent from './grid-content.vue';

export default {
  props: ['attributes', 'content'],
  components: { GridContent },
};
</script>
