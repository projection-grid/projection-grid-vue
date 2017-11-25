<template>
  <renderer :options="renderer" :model="renderModel"/>
</template>
<script>
import Renderer from './renderer.vue';
import { ProjectionGridCore } from './mock/projection-grid-core';
import { Normalizer } from './normalizer';

export default {
  created() {
    this.core = new ProjectionGridCore({
      normalizer: new Normalizer(),
    });
  },

  components: { Renderer },
  props: ['config', 'projections', 'renderer'],
  computed: {
    renderModel() {
      return this.core.compose({
        config: this.config,
        projections: this.projections,
      });
    },
  },
};
</script>
