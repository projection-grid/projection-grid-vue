<template>
  <renderer :options="renderer" :table="table"/>
</template>
<script>
import ProjectionGridCore from 'projection-grid-core';
import Renderer from './renderer/index.vue';
import defaults from './builtin-projections/defaults';

export default {
  created() {
    this.core = ProjectionGridCore.createDefault();
  },

  components: { Renderer },
  props: ['config', 'projections', 'renderer'],
  computed: {
    renderModel() {
      const model = this.core.compose({
        config: this.config || {},
        projections: [defaults, ...this.projections || []],
      });
      return model;
    },

    table() {
      return this.renderModel.table;
    },
  },
};
</script>
