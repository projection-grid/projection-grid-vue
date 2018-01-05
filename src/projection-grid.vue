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
  props: ['config', 'projections', 'renderer', 'state', 'dispath'],
  data() {
    return { gridState: {} };
  },
  methods: {
    getState() {
      return this.state || this.gridState;
    },
    setState(state) {
      if (this.state) {
        this.state = state;
      } else {
        this.gridState = state;
      }

      return state;
    },
  },
  computed: {
    renderModel() {
      const model = this.core
        .useBuiltin({ defaultContentFactory })
        .use(this.projections || [])
        .compose({
          config: this.config || {},
          state: this.state || this.gridState,
          dispatch: this.dispath || ((reducer, ...args) =>
            this.setState(reducer(this.getState(), ...args))
          ),
        });
      return model;
    },

    table() {
      return this.renderModel.table;
    },
  },
};
</script>
