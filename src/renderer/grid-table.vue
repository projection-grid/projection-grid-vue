<template>
  <table v-bind="attributes" v-on="events">
    <grid-caption v-if="caption" v-bind="caption"/>
    <grid-colgroup v-for="colgroup in colgroups" v-bind="colgroup" :key="colgroup.key"/>
    <grid-section v-if="thead" v-bind="thead"/>
    <grid-section v-for="tbody in tbodies" v-bind="tbody" :key="tbody.key"/>
    <grid-section v-if="tfoot" v-bind="tfoot"/>
  </table>
</template>
<script>
import GridCaption from './grid-caption.vue';
import GridColgroup from './grid-colgroup.vue';
import GridSection from './grid-section.vue';
import { attributes } from './attributes';

export default {
  props: ['tag', 'props', 'styles', 'classes', 'events', 'caption', 'colgroups', 'thead', 'tbodies', 'tfoot'],
  computed: { attributes },
  components: {
    GridCaption,
    GridColgroup,
    GridSection,
  },
};
</script>
