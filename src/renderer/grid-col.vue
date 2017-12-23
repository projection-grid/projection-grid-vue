<template>
  <col v-bind="attributes" v-on="events"/>
</template>
<script>
import { attributes } from './attributes';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events'],
  computed: { attributes },
};
</script>
