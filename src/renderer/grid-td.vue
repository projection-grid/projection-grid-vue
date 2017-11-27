<template>
  <td v-bind="attributes">
    <grid-content v-bind="content" />
  </td>
</template>
<script>
import GridContent from './grid-content.vue';

export default {
  props: ['attributes', 'content'],
  components: { GridContent },
};
</script>
