<template>
  <colgroup v-bind="attributes">
    <grid-col v-for="col in cols" v-bind="col" :key="col.key"/>
  </colgroup>
</template>
<script>
import GridCol from './grid-col.vue';

export default {
  props: ['attributes', 'cols'],
  components: { GridCol },
};
</script>
