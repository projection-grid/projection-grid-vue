# vue-projection-grid

# API design draft

```vue
<template lang="pug">
.grid-example
  .filter-container
  .grid-container
    grid(config="gridConfig", grid-dataSource="gridDataSource")
      scroll(view-port={{window}} virtualized header.sticky={{ {offset => () => {
        // calculating offset
      }} }})
      filter(v-bind:conditions="filters")
  .pagination-control-container
</template>

<script>
import VueProjectionGrid, { ScrollingPlugin, FilterPlugin } from 'vue-projection-grid';

export default {
  components: {
    grid: VueProjectionGrid,
    scroll: ScrollingPlugin,
    filter: FilterPlugin,
  },
  data() {
    return {
      gridConfig: {
        tableClasses: ['bingadsgrid'],
        columns: [
          // ...columns
        ],
      },
      gridDataSource: query => {
        // ...fetching data
      },
    }
  },
  computed() {
    filters() {
      // get filters from external filter controls
    }
  }
}
</script>



```