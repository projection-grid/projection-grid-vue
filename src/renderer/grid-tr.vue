<template>
  <tr v-bind="attributes" v-on="events">
    <grid-th v-for="th in ths" v-bind="th" :key="th.key"/>
    <grid-td v-for="td in tds" v-bind="td" :key="td.key"/>
  </tr>
</template>
<script>
import GridTd from './grid-td.vue';
import GridTh from './grid-th.vue';
import { attributes } from './util';

export default {
  props: ['props', 'styles', 'classes', 'events', 'tds', 'ths'],
  computed: { attributes },
  components: { GridTd, GridTh },
};
</script>
