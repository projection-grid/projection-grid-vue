# vue-projection-grid

## Development

### Workflow

1. Fork the repository. Please refer to: https://help.github.com/articles/syncing-a-fork/
2. Work on your own repository.
3. Send out pull request.
4. Reviewer review the change and approve/request change.
5. Merge the pull request once travis ci check passes.

### npm scripts

To build the library:

```bash
npm run build
```

To build the basic demo:

```bash
npm run demo:basic
```

To start the dev page with hot reloading

```bash
npm run dev
```

To run all tests

```bash
npm test
```

To generate doc file based on jsdoc

```bash
npm run jsdoc
```

### Coverage

coverage threashold is defined in the root package.json. Default test task will check the coverage.

## API design draft

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