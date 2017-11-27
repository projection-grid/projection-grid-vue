<template>
  <renderer :options="renderer" :table="table"/>
</template>
<script>
import Renderer from './renderer/index.vue';
import { ProjectionGridCore } from './mock/projection-grid-core';
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
