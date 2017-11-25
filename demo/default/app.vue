<template>
  <div>
    <h3>This is vue projection grid - basic demo</h3>
    <input class="form-control" v-model.lazy="icon" />
    <projection-grid :config="config" :projections="projections" />
  </div>
</template>

<script>
import ProjectionGrid from 'VueProjectionGrid'; // eslint-disable-line
import { customCSS } from './projections/custom-css';
import { iconedCell } from './projections/iconed-cell';

import people from './people.json';

export default {
  components: { ProjectionGrid },
  data() {
    return {
      config: {
        records: people.value,
        columns: [
          { name: 'UserName' },
          { name: 'FirstName' },
          { name: 'LastName' },
        ],
        primaryKey: 'UserName',
      },
      icon: 'heart-empty',
    };
  },
  computed: {
    projections() {
      return [
        customCSS({ tableClass: 'table table-bordered' }),
        iconedCell({ icon: this.icon }),
      ];
    },
  },
};
</script>
