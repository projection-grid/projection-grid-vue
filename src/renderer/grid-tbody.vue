<template>
  <tbody v-bind="attributes" v-on="events">
    <grid-tr v-for="tr in trs" v-bind="tr" :key="tr.key"/>
  </tbody>
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
