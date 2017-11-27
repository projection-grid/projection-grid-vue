<template>
  <grid-table v-bind="table"/>
</template>

<script>
import GridTable from './grid-table.vue';

export default {
  props: ['table', 'options', 'context'],
  components: { GridTable },
};
</script>
