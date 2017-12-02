<template>
  <th v-bind="attributes" v-on="events">
    <grid-content v-bind="content"/>
  </th>
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
