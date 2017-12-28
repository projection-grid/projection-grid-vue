<template>
  <renderer :options="renderer" :table="table"/>
</template>
<script>
import createCore from 'projection-grid-core';
import Renderer from './renderer/index.vue';
import defaultContentFactory from './projections/default-content';

export default {
  created() {
    this.core = createCore();
  },

  components: { Renderer },
  props: ['config', 'projections', 'renderer'],
  computed: {
    renderModel() {
      const model = this.core
        .useBuiltin({ defaultContentFactory })
        .use(this.projections || [])
        .compose({
          config: this.config || {},
        });
      return model;
    },

    table() {
      return this.renderModel.table;
    },
  },
};
</script>
