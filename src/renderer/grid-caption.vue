<template>
  <caption v-bind="attributes" v-on="events">
    <grid-content v-bind="content"/>
  </caption>
</template>
<script>
import GridContent from './grid-content.vue';
import { attributes } from './attributes';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events', 'content'],
  computed: { attributes },
  components: { GridContent },
};
</script>
