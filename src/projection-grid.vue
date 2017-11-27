<template>
  <renderer :options="renderer" :table="table"/>
</template>
<script>
import ProjectionGridCore from 'projection-grid-core';
import Renderer from './renderer/index.vue';
import { vueDefault } from './projections/vue-default';

export default {
  created() {
    this.core = new ProjectionGridCore();
  },

  components: { Renderer },
  props: ['config', 'projections', 'renderer'],
  computed: {
    renderModel() {
      const model = this.core.compose({
        config: this.config,
        projections: [
          vueDefault,
        ].concat(this.projections),
      });
      return model;
    },

    table() {
      return this.renderModel.table;
    },
  },
};
</script>
