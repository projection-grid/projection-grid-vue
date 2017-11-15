<template>
  <div>
    <h1>vue-projection-grid</h1>
    <backbone container-classes="grid-container" :view="gridView" />
  </div>
</template>

<script>
import pgrid from 'projection-grid';

import BackboneViewWrapper from './components/backbone-view-wrapper.vue';

/**
 * @vue The root component.
 */
export default {
  components: {
    backbone: BackboneViewWrapper,
  },
  props: ['config'],
  data() {
    return {
      gridView: pgrid.factory({ vnext: true })
        .create({
          tableClasses: this.config.tableClasses,
          dataSource: this.config.dataSource,
        }).gridView.render(),
    };
  },
  destoryed() {
    this.gridView.remove();
  },
};
</script>
