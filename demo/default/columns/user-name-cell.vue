<template>
  <b><grid-content v-bind="content"/></b>
</template>
<script>
import { GridContent } from 'vue-projection-grid'; // eslint-disable-line

export default {
  props: ['column', 'record', 'config', 'content'],
  components: { GridContent },
};
</script>
