<template>
  <renderer :options="renderer" :table="table"/>
</template>
<script>
import ProjectionGridCore from 'projection-grid-core';
import Renderer from './renderer/index.vue';
import { DefaultCell, DefaultHeader } from './default-components';

export default {
  created() {
    this.core = new ProjectionGridCore({ DefaultCell, DefaultHeader });
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
