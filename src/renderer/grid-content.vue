<template>
  <component :is="Component" v-bind="attributes" v-on="events" />
</template>
<script>
import { attributes } from './util';

export default {
  props: ['Component', 'props', 'styles', 'classes', 'events'],
  computed: { attributes },
};
</script>
