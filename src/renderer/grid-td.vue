<template>
  <component :is="tagName" v-bind="attributes" v-on="events">
    <grid-content v-bind="content"/>
  </component>
</template>
<script>
import GridContent from './grid-content.vue';
import { attributes } from './attributes';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events', 'content'],
  computed: {
    attributes,
    tagName() {
      return {
        TD: 'td',
        TH: 'th',
      }[this.tag] || 'td';
    }
  },
  components: { GridContent },
};
</script>
