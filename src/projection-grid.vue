<template>
  <renderer :options="renderer" :table="table"/>
</template>
<script>
import ProjectionGridCore, { projections } from 'projection-grid-core';
import Renderer from './renderer/index.vue';
import defaultContent from './projections/default-content';

export default {
  created() {
    const core = ProjectionGridCore.createDefault();
    const index = core.projections.indexOf(projections.defaultContent);

    core.projections.splice(index, 0, defaultContent);
    this.core = core;
  },

  components: { Renderer },
  props: ['config', 'projections', 'renderer'],
  computed: {
    renderModel() {
      const model = this.core.compose({
        config: this.config || {},
        projections: this.projections || [],
      });
      return model;
    },

    table() {
      return this.renderModel.table;
    },
  },
};
</script>
