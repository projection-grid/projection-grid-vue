<template>
  <col v-bind="attributes" v-on="events"/>
</template>
<script>
import { attributes } from './util';

export default {
  props: ['props', 'styles', 'classes', 'events'],
  computed: { attributes },
};
</script>
