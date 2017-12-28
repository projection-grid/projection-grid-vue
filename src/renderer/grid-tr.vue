<template>
  <tr v-bind="attributes" v-on="events">
    <grid-td v-for="td in tds" v-bind="td" :key="td.key"/>
  </tr>
</template>
<script>
import GridTd from './grid-td.vue';
import { attributes } from './attributes';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events', 'tds', 'ths'],
  computed: { attributes },
  components: { GridTd },
};
</script>
