<template>
  <component :is="tagName" v-bind="attributes" v-on="events">
    <grid-tr v-for="tr in trs" v-bind="tr" :key="tr.key"/>
  </component>
</template>
<script>
import GridTr from './grid-tr.vue';
import { attributes } from './util';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events', 'trs'],
  computed: {
    attributes,
    tagName() {
      return {
        THEAD: 'thead',
        TBODY: 'tbody',
        TFOOT: 'tfoot',
      }[this.tag] || 'tbody';
    },
  },
  components: { GridTr },
};
</script>
