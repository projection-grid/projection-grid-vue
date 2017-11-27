<template>
  <table v-bind="attributes">
    <grid-caption v-if="caption" v-bind="caption"/>
    <grid-colgroup v-for="colgroup in colgroups" v-bind="colgroup" :key="colgroup.key"/>
    <grid-thead v-if="thead" v-bind="thead"/>
    <grid-tbody v-for="tbody in tbodies" v-bind="tbody" :key="tbody.key"/>
    <grid-tfoot v-if="tfoot" v-bind="tfoot"/>
  </table>
</template>
<script>
import GridCaption from './grid-caption.vue';
import GridColgroup from './grid-colgroup.vue';
import GridThead from './grid-thead.vue';
import GridTbody from './grid-tbody.vue';
import GridTfoot from './grid-tfoot.vue';

export default {
  props: ['attributes', 'caption', 'colgroups', 'thead', 'tbodies', 'tfoot'],
  components: {
    GridCaption,
    GridColgroup,
    GridThead,
    GridTbody,
    GridTfoot,
  },
};
</script>
