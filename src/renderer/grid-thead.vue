<template>
  <thead v-bind="attributes">
    <grid-tr v-for="tr in trs" v-bind="tr" :key="tr.key"/>
  </thead>
</template>
<script>
import GridTr from './grid-tr.vue';
import { attributes } from './util';

export default {
  props: ['props', 'styles', 'classes', 'events', 'trs'],
  computed: { attributes },
  components: { GridTr },
};
</script>
