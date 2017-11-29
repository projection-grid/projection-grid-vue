<template>
  <td v-bind="attributes" v-on="events">
    <grid-content v-bind="content" />
  </td>
</template>
<script>
import GridContent from './grid-content.vue';
import { attributes } from './util';

export default {
  props: ['props', 'styles', 'classes', 'events', 'content'],
  computed: { attributes },
  components: { GridContent },
};
</script>
