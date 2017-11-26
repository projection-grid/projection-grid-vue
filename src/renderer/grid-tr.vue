<template>
  <tr v-bind="attributes">
    <grid-th v-for="th in ths" v-bind="th" :key="th.key"/>
    <grid-td v-for="td in tds" v-bind="td" :key="td.key"/>
  </tr>
</template>
<script>
import GridTd from './grid-td.vue';
import GridTh from './grid-th.vue';

export default {
  props: ['attributes', 'tds', 'ths'],
  components: { GridTd, GridTh },
};
</script>
