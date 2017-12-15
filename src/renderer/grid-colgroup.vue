<template>
  <colgroup v-bind="attributes" v-on="events">
    <grid-col v-for="col in cols" v-bind="col" :key="col.key"/>
  </colgroup>
</template>
<script>
import GridCol from './grid-col.vue';
import { attributes } from './util';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events', 'cols'],
  computed: { attributes },
  components: { GridCol },
};
</script>
