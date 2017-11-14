<template>
  <div>
    <h3>This is vue projection grid - basic demo</h3>
    <grid :config="config" />
  </div>
</template>

<script>
import VueProjectionGrid from 'VueProjectionGrid'; // eslint-disable-line

import people from './people.json';

export default {
  components: {
    grid: VueProjectionGrid,
  },
  data() {
    return {
      config: {
        tableClasses: ['table', 'table-bordered'],
        dataSource: {
          type: 'memory',
          data: people.value,
          primaryKey: 'UserName',
        },
      },
    };
  },
};
</script>

